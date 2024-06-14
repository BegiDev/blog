import { Home, Newspaper } from "lucide-react";

export const navLinks = [
  { name: "Asosiy", route: "/", icon: Home, id: 0 },
  { name: "Maqolalar", route: "/blog", icon: Newspaper, id: 1 },
  { name: "Men haqimda", route: "/about", icon: Newspaper, id: 2 },
];

export const popularCategories = [
  { name: "Dasturlash", slug: "dasturlash" },
  { name: "Qiziqarli", slug: "qiziqarli" },
  { name: "Suniy Intelekt", slug: "suniy-intelekt" },
];

export const popularTags = [
  { name: "Matematika", slug: "matematika" },
  { name: "HTML", slug: "html" },
  { name: "English", slug: "english" },
  { name: "NextJS", slug: "next-js" },
];

export const learningTechnology = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "Tailwind css" },
  { name: "Sass" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "React" },
  { name: "Next Js" },
];

export const blogs = [
  {
    title: "10 examples of social media posts to get inspired",
    description:
      "You’ve probably heard it a dozen times before, but social media needs to be part of your online strategy. Whether you have a website, personal blog or webshop, social media allows you to reach and connect with your audience. To get new people into contact with you and to stay top of mind with your current customer base or followers. But where to start? In this post, we’ll show you 10 examples of different social media posts to help you get inspired and reach your audience in a way that fits your brand!",
    author: "Begzod",
    tags: ["Posts Ideas"],
    date: "Apr 9, 2024",
    image: "/blogs/blog1.avif",
  },
  {
    title: "1. The Cheesecake Factory: Use humor and great photos",
    description:
      "The Cheesecake Factory is an American chain of restaurants, localized around the world. If you’re not familiar with it, you may recognize the name from the hit series The Big Bang Theory. They have a large following on Facebook and regularly post about food that’s on their menu. These posts get a lot of engagement, due to the great images used and the funny text accompanying them.",
    author: "Begzod", 
    tags: ["Math tick"],
    date: "Apr 12, 2022",
    image: "/blogs/blog2.avif",
  },
  {
    title: "Is AI content helping or hurting your website?",
    description:
      "New AI content tools are popping up left and right. These tools can help you write a social post, or a whole blog post, answer any question, or even create a brand-new image! This is great and helpful when you only have a little time or need more inspiration. But the big question is, are AI tools actually helping us? Should we be using them to create our content? This blog post will discuss AI content and why we should be mindful of how we use it.",
    author: "Begzod",
    tags: ["Front-end"],
    date: "May 12, 2022",
    image: "/blogs/blog3.avif",
  },
];
