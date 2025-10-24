import React from 'react';

const Logo = ({ className = '', size = 100, mobileSize, showText = true, showTagline = false }) => {
  const isDark = className.includes('text-white');
  
  // Use mobileSize if provided, otherwise use size for all screens
  const mobileSizeValue = mobileSize || size;
  
  // Dynamic sizing based on size prop: width = size * 4, height = size * 2
  const desktopWidth = size * 4;
  const desktopHeight = size * 2;
  const mobileWidth = mobileSizeValue * 4;
  const mobileHeight = mobileSizeValue * 2;
  
  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      {/* Mobile Logo */}
      <img 
        src="/logo.png" 
        alt="Quantum IT Solutions" 
        className="object-contain md:hidden"
        style={{ width: `${mobileWidth}px`, height: `${mobileHeight}px` }} 
      />
      {/* Desktop Logo */}
      <img 
        src="/logo.png" 
        alt="Quantum IT Solutions" 
        className="object-contain hidden md:block"
        style={{ width: `${desktopWidth}px`, height: `${desktopHeight}px` }} 
      />
      {showText && (
        <div className="flex flex-col">
{/*         
          {showTagline && (
            <span className={`text-xs sm:text-sm font-normal ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Simplifying IT. Amplifying Success.
            </span>
          )} */}
        </div>
      )}
    </div>
  );
};

export default Logo;
