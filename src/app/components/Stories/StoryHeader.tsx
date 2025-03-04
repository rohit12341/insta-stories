import Image from "next/image";
import React from "react";

type Props = {
  user: {
    username: string;
    avatar: string;
  };
};

const StoryHeader = ({ user }: Props) => {
  return (
    <div className="flex items-start justify-between absolute top-0 left-0 w-full p-4 z-10">
      <div className="flex items-start gap-2">
        <Image
          src={user.avatar}
          width={36}
          height={400}
          alt={user.username}
          className="w-8 h-8 rounded-full"
        />
        <div>
          <p className="text-xs text-center font-semibold">{user.username}</p>
          <p className="text-xs text-center">Track 1</p>
        </div>
      </div>
    </div>
  );
};

export default StoryHeader;
