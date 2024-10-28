import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-3 z-30 ${
        isVisible ? 'block' : 'hidden'
      }`}
    >
   <div className="flex flex-col items-center space-y-2">
        <button
            onClick={scrollToTop}
            className="flex items-center justify-center w-9 h-12 border-2 border-transparent rounded-full bg-[#86A6F6] shadow-lg hover:bg-[#415EA5] transition-all duration-300"
        >
            <span className="text-black text-bold text-[18px] ">↑</span>
        </button>
    </div>
    </div>
  );
};

export default ScrollToTop;