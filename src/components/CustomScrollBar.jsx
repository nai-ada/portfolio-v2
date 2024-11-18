// components/CustomScrollBar.jsx
import React from 'react';

const CustomScrollBar = ({ children, maxHeight = "100vh", className = "" }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div 
        className={`
          overflow-y-scroll 
          w-full 
          h-full
          [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:rounded-full
          [&::-webkit-scrollbar-track]:bg-transparent
          dark:[&::-webkit-scrollbar-track]:bg-[#161616]
          [&::-webkit-scrollbar-thumb]:rounded-full
          [&::-webkit-scrollbar-thumb]:bg-gray-300
          [&::-webkit-scrollbar-thumb]:hover:bg-gray-400
          
          /* Firefox */
          scrollbar-width: thin
          scrollbar-color: rgb(209 213 219) transparent
          dark:scrollbar-color: rgb(209 213 219) #161616
          ${className}
        `}
        style={{ 
          maxHeight: maxHeight,
          height: '100%'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default CustomScrollBar;