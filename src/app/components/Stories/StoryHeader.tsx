import Image from "next/image";
import React from "react";

type Props = {
  setActiveStory: (val: number | undefined) => void;
  user: {
    username: string;
    avatar: string;
  };
};

const StoryHeader = ({ user, setActiveStory }: Props) => {
  return (
    <div className="flex items-start justify-between absolute top-0 left-0 w-full p-4">
      <div className="flex items-start gap-2">
        <Image
          src={user.avatar}
          width={40}
          height={400}
          alt={user.username}
          className="w-10 h-10 rounded-full"
        />
        <p className="text-xs text-center">{user.username}</p>
      </div>
      <button onClick={() => setActiveStory(undefined)} className="text-xs">
        X
      </button>
    </div>
  );
};

export default StoryHeader;
