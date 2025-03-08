import { StoryData } from "@/app/types/stories";
import React, { useEffect, useRef } from "react";
import StoryCard from "./StroyCard";

type Props = {
  data: StoryData[];
  activeStory: number;
  setActiveStory: (val: number | undefined) => void;
};

const StoryList = ({ data, activeStory, setActiveStory }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const swaipeInterval = useRef<NodeJS.Timeout | null>(null);
  const story = data[activeStory];
  const [activeContent, setActiveContent] = React.useState<number>(0);

  const scrollToStory = (index: number) => {
      const parent = containerRef.current;
      if (parent && parent.children[index]) {
        (parent.children[index] as HTMLElement).scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
      console.log('scrolled to', index)
  }

  const handleClick = (
    e: React.MouseEvent<HTMLDivElement> | null,
    direction?: string
  ) => {
    const viewportWidth = window.innerWidth;
    const clickPosition = e?.clientX ?? 0;
    let activeIndex = activeContent;
    let storyIndex = activeStory;

    if (!direction) {
      swaipeInterval.current && clearInterval(swaipeInterval.current);
    }

    if (direction === "right" || clickPosition > viewportWidth / 2) {
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
      } else if (activeIndex <= story.content.length - 1) {
        storyIndex = activeStory > 0 ? activeStory - 1 : 0;
        activeIndex = 0;
      }
    }
    setActiveStory(storyIndex);
    setActiveContent(activeIndex);
    scrollToStory(storyIndex)
  };

  useEffect(() => {
    swaipeInterval.current = setInterval(() => {
      handleClick(null, "right");
    }, 5000);
    return () => {
      if (swaipeInterval.current) {
        clearInterval(swaipeInterval.current);
      }
    };
  }, []);

  return (
    <div data-testid={`storyContainer-${activeStory}`} className="fixed top-0 z-50 w-[375px] overflow-hidden h-full bg-black text-white left-[50%] transform -translate-x-1/2">
      <div
        onClick={handleClick}
        ref={containerRef}
        className="flex justify-start gap-x-3 snap-x snap-mandatory no-scrollbar"
      >
        {data.map((story, i) => (
          <StoryCard key={i} story={story} activeContent={activeContent} />
        ))}
      </div>
    </div>
  );
};

export default StoryList;
