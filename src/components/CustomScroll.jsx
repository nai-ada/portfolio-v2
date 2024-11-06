import React from 'react';

const CustomScroll = ({ children, maxHeight = "100vh", className = "" }) => {
  return (
    <div className="relative w-full">
      <div 
        className={`
          overflow-y-auto 
          w-full 
          [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:rounded-full
          [&::-webkit-scrollbar-track]:bg-gray-100
          [&::-webkit-scrollbar-thumb]:rounded-full
          [&::-webkit-scrollbar-thumb]:bg-gray-300
          [&::-webkit-scrollbar-thumb]:hover:bg-gray-400
          
          /* Firefox */
          scrollbar-width-thin
          scrollbar-color-gray-300
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

export default CustomScroll;
