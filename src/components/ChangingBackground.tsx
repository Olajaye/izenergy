import React, { useState, useEffect } from 'react';
// import { useTheme } from '../stores/themeStore';

const backgrounds = [
  'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
];

const ChangingBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  // const { isDark } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setNextImageIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
      setTimeout(() => {
        setCurrentImageIndex(nextImageIndex);
      }, 3000); // Switch after fade effect
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [nextImageIndex]);

  return (
    <div className="relative h-screen overflow-hidden">
      {backgrounds.map((bg, index) => (
        <div
          key={bg}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-[3s]"
          style={{
            backgroundImage: `url(${bg})`,
            opacity: index === currentImageIndex ? 1 : 0,
            zIndex: index === currentImageIndex ? 1 : 0,
            filter: index === currentImageIndex ? 'none' : 'blur(8px)', // Blur effect
          }}
        />
      ))}
      <div className={`absolute inset-0 bg-opacity-60 z-10`} />
        <div className="relative z-20">
          {children}
      </div>
    </div>
  );
};

export default ChangingBackground;