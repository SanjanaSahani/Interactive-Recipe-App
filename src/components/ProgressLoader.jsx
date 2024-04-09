import React, { useEffect, useState } from 'react';

function ProgressLoader({ percent, title }) {
  const radius = 30; 
  const strokeWidth = 6;
  const circumference = 2 * Math.PI * radius; 
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProgress((prevProgress) => {
        if (prevProgress >= percent) {
          clearInterval(interval); 
          return percent;
        }
        return Math.min(prevProgress + 1, percent);
      });
    }, 20);

    return () => clearInterval(interval);
  }, [percent]);

  const progress = (100 - currentProgress) / 100 * circumference; 

  return (
    <div className="single-pie-bar mb-8 w-32 h-32 relative">
      <svg className="absolute inset-0" width="100%" height="100%" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          fill="transparent"
          stroke="#00D100"
          strokeWidth={strokeWidth}
        />

        {/* Progress bar */}
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          fill="transparent"
          stroke="#F2F1F0"
          strokeWidth={strokeWidth}
          strokeDasharray={`${progress} ${circumference}`}
          strokeLinecap="round"
          transform="rotate(210 50 50)"
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-lg font-semibold">{percent}%</span>
      </div>
      <h6 className="text-center text-xl font-semibold z-10 absolute top-[90%] left-[24%]">{title}</h6>
    </div>
  );
}

export default ProgressLoader;
