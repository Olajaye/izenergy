import { create } from 'zustand';

interface NewsletterStore {
  isSubscribing: boolean;
  hasError: string | null;
  subscribeToNewsletter: (email: string) => Promise<void>;
}

export const useNewsletter = create<NewsletterStore>((set) => ({
  isSubscribing: false,
  hasError: null,
  subscribeToNewsletter: async (email: string) => {
    set({ isSubscribing: true, hasError: null });
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Store email in localStorage to persist subscription
      const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
      if (subscribers.includes(email)) {
        throw new Error('You are already subscribed!');
      }
      subscribers.push(email);
      localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));
      
      set({ isSubscribing: false, hasError: null });
    } catch (error) {
      set({ isSubscribing: false, hasError: error instanceof Error ? error.message : 'Subscription failed' });
    }
  },
}));