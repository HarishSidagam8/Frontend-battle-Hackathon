
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative flex flex-col items-center">
        {/* Main loading animation */}
        <div className="relative">
          {/* Outer ring */}
          <div className="w-32 h-32 border-4 border-blue-200/30 rounded-full animate-spin"></div>
          
          {/* Middle ring */}
          <div className="absolute top-2 left-2 w-28 h-28 border-4 border-purple-300/50 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          
          {/* Inner ring */}
          <div className="absolute top-4 left-4 w-24 h-24 border-4 border-white/70 rounded-full animate-spin" style={{ animationDuration: '0.8s' }}></div>
          
          {/* Center dot */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
        </div>

        {/* Pulsing dots */}
        <div className="flex space-x-2 mt-8">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-white/70 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>

        {/* Loading text */}
        <div className="mt-6 text-center">
          <h2 className="text-2xl font-bold text-white animate-pulse">
            Loading Analytics Platform
          </h2>
          <p className="text-blue-200 mt-2 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Preparing your data insights...
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-white/20 rounded-full mt-6 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 rounded-full animate-pulse loading-progress"></div>
        </div>
      </div>

      <style jsx>{`
        .loading-progress {
          animation: loading-fill 2s ease-in-out infinite;
        }

        @keyframes loading-fill {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
