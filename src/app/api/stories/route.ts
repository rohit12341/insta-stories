import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    {
      id: 1,
      title: "My Story",
      user: {
        username: "Rohit",
        avatar: "https://via.placeholder.com/150",
      },
      content: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max",
        },
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max",
        },
      ],
    },
    {
      id: 2,
      title: "My Story",
      user: {
        username: "user2",
        avatar: "https://via.placeholder.com/150",
      },
      content: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max",
        },
        {
          type: "video",
          src: "https://via.placeholder.com/150",
        },
      ],
    },
    {
      id: 3,
      title: "My Story",
      user: {
        username: "user3",
        avatar: "https://via.placeholder.com/150",
      },
      content: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max",
        },
        {
          type: "video",
          src: "https://via.placeholder.com/150",
        },
      ],
    },
  ];
  return NextResponse.json(data);
}
