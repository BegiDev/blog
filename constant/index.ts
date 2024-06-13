import { Home, Newspaper, CodeXml} from "lucide-react";

export const navLinks = [
  { name: "Asosiy", route: "/", icon: Home, id: 0 },
  { name: "Maqolalar", route: "/blog", icon: Newspaper, id: 1 },
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
  {name: "HTML", icon: CodeXml},
  {name: "CSS", icon: CodeXml},
  {name: "Tailwind css", icon: CodeXml},
  {name: "Sass", icon: CodeXml},
  {name: "JavaScript", icon: CodeXml},
  {name: "React", icon: CodeXml},
  {name: "Next Js", icon: CodeXml},
]