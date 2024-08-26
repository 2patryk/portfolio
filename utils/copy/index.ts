import { metaCopy } from "./meta";

export const globalCopy = {
  meta: metaCopy,
  menu: {
    about: "About me",
    projects: "Projects",
    contact: "Contact",
  },
  header: {
    preTitle: "Hi there, I'm",
    title: "Patryk Ordon",
    postTitle: "Creative Frontend Developer",
  },
};

export type Copy = typeof globalCopy;
