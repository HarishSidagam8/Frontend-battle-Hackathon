
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="text-center">
        <div className="relative">
          {/* Outer ring */}
          <div className="w-16 h-16 border-4 border-blue-200 dark:border-blue-800 rounded-full animate-spin border-t-blue-600 dark:border-t-blue-400"></div>
          
          {/* Inner ring */}
          <div className="absolute top-2 left-2 w-12 h-12 border-4 border-transparent rounded-full animate-spin border-t-blue-400 dark:border-t-blue-300" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          
          {/* Center dot */}
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-loading-pulse"></div>
        </div>
        
        <div className="mt-4">
          <p className="text-lg font-semibold text-gray-900 dark:text-white animate-loading-pulse">
            Loading Analytics...
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Preparing your dashboard
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
