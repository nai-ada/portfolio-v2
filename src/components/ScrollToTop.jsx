import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    const shouldBeVisible = window.scrollY > 300;
    console.log(
      "Scroll position:",
      window.scrollY,
      "Should be visible:",
      shouldBeVisible
    );
    setIsVisible(shouldBeVisible);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Initial check
    toggleVisibility();

    // Add event listener
    window.addEventListener("scroll", toggleVisibility);

    // Cleanup
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  console.log("isVisible state:", isVisible); // Debug log

  return (
    <div
      className={`fixed bottom-8 right-8 z-[9999] transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-[#86A6F6] shadow-lg hover:bg-[#415EA5] transition-all duration-300"
        aria-label="Scroll to top"
      >
        <span className="text-white text-2xl font-bold">↑</span>
      </button>
    </div>
  );
};

export default ScrollToTop;
