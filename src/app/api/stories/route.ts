import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    {
      id: 1,
      title: "My Story",
      user: {
        username: "Rohit",
        avatar: "https://avatars.githubusercontent.com/u/30390511?v=4",
      },
      content: [
        {
          type: "image",
          src: "https://i.pinimg.com/736x/3c/18/a4/3c18a4208a752cd581c37f9a2cb0e9e2.jpg",
        }
      ],
    },
    {
      id: 2,
      title: "My Story",
      user: {
        username: "rambo",
        avatar: "https://avatars.githubusercontent.com/u/30390511?v=4",
      },
      content: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max",
        },
        // {
        //   type: "image",
        //   src: "https://avatars.githubusercontent.com/u/30390511?v=4",
        // },
      ],
    },
    {
      id: 3,
      title: "My Story",
      user: {
        username: "ronnie",
        avatar: "https://avatars.githubusercontent.com/u/30390511?v=4",
      },
      content: [
        {
          type: "image",
          src: "https://i.pinimg.com/736x/3c/18/a4/3c18a4208a752cd581c37f9a2cb0e9e2.jpg",
        }
      ],
    },
  ];
  return NextResponse.json(data);
}
