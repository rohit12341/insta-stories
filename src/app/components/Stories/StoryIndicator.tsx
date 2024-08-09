import React from "react";

type Props = {
  activeContent: number;
  size: number;
};

const StoryIndicator = ({ activeContent, size }: Props) => {
  return (
    <div className="flex items-start justify-between gap-1 px-1 absolute z-50 top-1 left-0 w-full">
      {Array.from({ length: size }).map((_, i) => (
        <div
          key={i}
          className={`flex-1 h-0.5 rounded-full ${
            activeContent === i ? "bg-white" : "bg-gray-500"
          }`}
        />
      ))}
    </div>
  );
};

export default StoryIndicator;
