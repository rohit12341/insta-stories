import React, { useEffect, useState } from "react";

type Props = {
  activeContent: number;
  size: number;
  activeStory: number;
  setActiveStory: (val: number | undefined) => void;
};

const duration = 2000;

const StoryIndicator = ({
  activeContent,
  size,
  activeStory,
  setActiveStory,
}: Props) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const intervalTime = 50;
    const step = 50 / (duration / intervalTime);

    let newProgress = 0;
    const interval = setInterval(() => {
      newProgress += step;
      setProgress(newProgress);
      if (newProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          // to add slight delay to switch to next slide
          setActiveStory(activeStory + 1);
        }, 100);
      }
    }, intervalTime);

    if (activeStory > size + 1) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [activeContent, activeStory, size]);

  return (
    <div className="flex items-start justify-between gap-1 px-1 absolute z-50 top-1 left-0 w-full">
      {Array.from({ length: size }).map((_, i) => (
        <div
          key={i}
          className={`flex-1 h-0.5 rounded-full bg-gray-500 relative overflow-hidden`}
        >
          {activeContent === i && (
            <div
              style={{ width: `${progress}%` }}
              className="bg-white absolute top-0 left-0 h-0.5 max-w-full transition-all width 50ms linear"
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StoryIndicator;
