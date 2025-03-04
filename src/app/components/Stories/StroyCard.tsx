import { ContentType, StoryData } from "@/app/types/stories";
import Image from "next/image";
import React from "react";
import StoryHeader from "./StoryHeader";
import StoryIndicator from "./StoryIndicator";

type Props = {
  story: StoryData;
  activeContent: number;
};

const StoryCard = ({ story, activeContent }: Props) => {
  const content = story.content?.[activeContent];
  return (
    <div className="flex justify-center flex-col gap-4 h-full w-full relative snap-center snap-always shrink-0 overflow-hidden relative">
      <StoryIndicator
        size={story.content.length}
        activeContent={activeContent}
      />
      <StoryHeader user={story.user} />
      {content && (
        <div className="h-screen flex items-center justify-center">
          {content.type === "image" && (
            <Image
              src={content.src}
              width={window.innerWidth}
              height={window.innerHeight}
              alt={story.title}
              className="w-full max-h-screen object-cover"
            />
          )}
          {content.type === "video" && (
            <video src={content.src} controls className="w-full max-h-screen" />
          )}
        </div>
      )}
    </div>
  );
};

export default StoryCard;
