export type contentTypes = "image" | "video";

export type ContentType = {
  type: contentTypes;
  src: string;
};

export type StoryData = {
  id: string;
  title: string;
  user: {
    username: string;
    avatar: string;
  };
  content: ContentType[];
};
