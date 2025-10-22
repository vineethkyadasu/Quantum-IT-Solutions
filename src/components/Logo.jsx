import React from 'react';

const Logo = ({ className = '', size = 100, showText = true, showTagline = false }) => {
  const isDark = className.includes('text-white');
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img src="/logo.png" alt="Quantum IT Solutions" style={{ width: 400, height: 200 }} />
      {showText && (
        <div className="flex flex-col">
{/*         
          {showTagline && (
            <span className={`text-sm font-normal ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Simplifying IT. Amplifying Success.
            </span>
          )} */}
        </div>
      )}
    </div>
  );
};

export default Logo;
