import { StoryData } from "@/app/types/stories";
import Image from "next/image";
import React from "react";
import StoryIndicator from "./StoryIndicator";
import StoryHeader from "./StoryHeader";

type Props = {
  data: StoryData[];
  activeStory: number;
  setActiveStory: (val: number | undefined) => void;
};

const StoryList = ({ data, activeStory, setActiveStory }: Props) => {
  const story = data[activeStory];
  const [activeContent, setActiveContent] = React.useState<number>(0);
  const content = story.content[activeContent];

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const viewportWidth = window.innerWidth;
    const clickPosition = e.clientX;
    let activeIndex = activeContent;
    let storyIndex = activeStory;

    if (clickPosition > viewportWidth / 2) {
      // Go to next activeContent if 50% right clicked
      if (activeIndex < story.content.length - 1) {
        activeIndex = activeContent + 1;
      } else if (activeIndex >= story.content.length - 1) {
        storyIndex =
          activeStory < data.length - 1 ? activeStory + 1 : data.length - 1;
        activeIndex =
          activeIndex === story.content.length - 1 &&
          activeStory === data.length - 1
            ? story.content.length - 1
            : 0;
      }
    } else {
      // Go to previous activeContent if 50% left clicked
      if (activeIndex > 0) {
        activeIndex = activeContent - 1;
      } else if (activeIndex < story.content.length - 1) {
        storyIndex = activeStory > 0 ? activeStory - 1 : 0;
        activeIndex = 0;
      }
    }
    setActiveStory(storyIndex);
    setActiveContent(activeIndex);
  };

  return (
    <div className="fixed top-0 z-50 w-[375px] overflow-hidden h-full bg-black text-white left-[50%] transform -translate-x-1/2">
      <StoryIndicator
        size={story.content.length}
        activeContent={activeContent}
      />
      <StoryHeader user={story.user} setActiveStory={setActiveStory} />
      <div
        onClick={handleClick}
        className="flex justify-center flex-col gap-4 h-full w-full"
      >
        {content && (
          <div className="">
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
              <video
                src={content.src}
                controls
                className="w-full max-h-screen"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default StoryList;
