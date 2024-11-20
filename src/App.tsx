import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import AppRoutes from './routes';
import NewsletterPopup from './components/NewsletterPopup';
import { useTheme } from './lib/themeStore';
import Footer from './components/Footer';

const App: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <Router>
      <div className={`font-inter transition-colors duration-200 ${
        isDark ? 'bg-primary-dark text-white' : 'bg-white text-background'
      }`}>
        <Header />
        <main className="scroll-smooth">
          <AppRoutes />
        </main>
        <NewsletterPopup />
        <Footer/>
      </div>
    </Router>
  );
};

export default App;