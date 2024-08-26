import { metaCopy } from "./meta";

export const globalCopy = {
  meta: metaCopy,
  menu: {
    about: "About me",
    projects: "Projects",
    contact: "Contact",
  },
  pages: {
    home: {
      hero: {
        preName: "Hi there, I'm",
        name: "Patryk Ordon",
        prePosition: "a",
        position: "Creative Frontend Developer",
        description:
          "I specialise in creating visually stunning web experiences with attention to every detail",
      },
      about: {
        label: "About me",
      },
    },
  },
};

export type Copy = typeof globalCopy;
