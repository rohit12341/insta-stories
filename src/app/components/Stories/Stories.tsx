import { StoryData } from "@/app/types/stories";
import Image from "next/image";
import React, { useState } from "react";
import StoryList from "./StoryList";

type Props = {
  data: StoryData[];
};

const Stories = ({ data }: Props) => {
  const [activeStory, setActiveStory] = useState<number | undefined>(undefined);

  return (
    <div data-testid="storyPage">
      <div className="flex items-center gap-4 p-4">
        {data.map((story, i) => (
          <div
            onClick={() => setActiveStory(i)}
            key={story.id}
            data-testid={`story-${i}`}
            className="flex flex-col gap-1 cursor-pointer"
          >
            <Image
              src={story.user.avatar}
              width={100}
              height={100}
              alt={story.user.username}
              className="w-16 h-16 rounded-full"
              loading="lazy"
            />
            <p className="text-xs text-center">{story.user.username}</p>
          </div>
        ))}
        {activeStory !== undefined && (
          <StoryList
            data={data}
            activeStory={activeStory}
            setActiveStory={setActiveStory}
          />
        )}
      </div>
    </div>
  );
};

export default Stories;
