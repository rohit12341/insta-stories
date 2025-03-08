This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Design Choices for Optimizing Performance & Scalability

1️⃣ Optimized Rendering & State Management
Minimal Re-renders: Used React’s useState and useEffect efficiently to update the currently visible story without causing unnecessary re-renders.
Virtualized Story List (Optional for Scalability): If there are hundreds of stories, implementing windowing (e.g., useRef to track visibility) prevents off-screen stories from rendering unnecessarily.

2️⃣ Efficient Story Loading & Caching
Lazy Loading Images: Used the loading="lazy" attribute to defer loading images that are offscreen, reducing initial load time.
Prefetching Next Story: When viewing a story, the next story is preloaded in the background to ensure a smooth transition.

3️⃣ Optimized Timers & Transitions
Efficient Timer Management: Used a single useEffect to manage the auto-advance of stories, ensuring that unnecessary timers are cleared when the user navigates manually.
Smooth Transitions: Used CSS transitions instead of JavaScript animations to offload work to the GPU for better performance.

4️⃣ Scalable & Modular Architecture
Component-Based Approach:

StoryList: Displays all stories in a horizontally scrollable format.
StoryViewer: Handles displaying the current story and transitions.
Story: A lightweight component to show individual story items.
Separation of Concerns: The story data is fetched independently, making it easy to scale and integrate with different data sources.

5️⃣ User Experience (UX) Enhancements
Manual Navigation: Clicking on the left/right side of the story moves to the previous/next story, improving usability.
Loading States: A loading spinner is shown until stories are fetched.

6️⃣ Mobile-First Optimization
Media Queries & Touch Controls: Used CSS media queries to ensure the layout is optimized for mobile screens.
No External Libraries: Avoided dependencies like Swiper.js, ensuring lightweight and zero-bloat implementation.

## Getting Started

First, run the development server:

```bash
Clone the repository on the local machine


Install dependencies:
npm install

Run locally:
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

run e2e test cases:
npm run test
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
