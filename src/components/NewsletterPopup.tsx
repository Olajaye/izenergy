import React, { useState, useEffect } from 'react';
import { X, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useTheme } from '../lib/themeStore';
import { useNewsletter } from '../lib/newsletterStore';

const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const { isDark } = useTheme();
  const { isSubscribing, hasError, subscribeToNewsletter } = useNewsletter();

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem('hasSeenPopup');
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('hasSeenPopup', 'true');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      useNewsletter.setState({ hasError: 'Please enter a valid email address' });
      return;
    }

    await subscribeToNewsletter(email);
    if (!hasError) {
      setIsSuccess(true);
      setTimeout(() => {
        handleClose();
      }, 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`${
        isDark ? 'bg-background-light border-background' : 'bg-text border-secondary'
      } p-8 rounded-lg max-w-md w-full relative border transition-all duration-200`}>
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-primary hover:text-primary-dark transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        <h2 className="text-2xl font-bold mb-4 text-center">
          Start Using Free Energy Today!
        </h2>
        
        <p className={`mb-6 text-center ${
          isDark ? 'text-text-dark' : 'text-background'
        }`}>
          Subscribe to our newsletter and get exclusive access to our energy calculator
          and latest updates on sustainable energy solutions.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubscribing || isSuccess}
              className={`w-full p-3 rounded border focus:border-primary focus:ring-1 focus:ring-primary disabled:opacity-50 ${
                isDark 
                  ? 'bg-background border-background-light text-text' 
                  : 'bg-secondary border-secondary-dark text-background'
              }`}
            />
          </div>

          {hasError && (
            <div className="flex items-center gap-2 text-red-500">
              <AlertCircle className="w-4 h-4" />
              <span className="text-sm">{hasError}</span>
            </div>
          )}
          
          <button
            type="submit"
            disabled={isSubscribing || isSuccess || !email}
            className={`w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-text font-medium py-3 px-4 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
              isSuccess ? 'bg-primary-dark hover:bg-primary-dark' : ''
            }`}
          >
            {isSubscribing ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Subscribing...
              </>
            ) : isSuccess ? (
              <>
                <CheckCircle2 className="w-5 h-5" />
                Subscribed!
              </>
            ) : (
              'Subscribe Now'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterPopup;