const Loader = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo Loader */}
        <div className="relative w-20 h-20 mx-auto mb-6">
          {/* Outer rotating circle */}
          <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-spin"></div>
          
          {/* Inner pulsing circle with gradient */}
          <div className="absolute inset-2 rounded-full bg-gradient-primary animate-pulse flex items-center justify-center">
            {/* Lab icon representation */}
            <svg 
              className="w-8 h-8 text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" 
              />
            </svg>
          </div>
          
          {/* Orbiting dots */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full"></div>
          </div>
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }}>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-secondary rounded-full"></div>
          </div>
        </div>
        
        {/* Loading text */}
        <p className="text-muted-foreground font-medium animate-pulse">
          Loading healthcare infrastructure...
        </p>
      </div>
    </div>
  );
};

export default Loader;
