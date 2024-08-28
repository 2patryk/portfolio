import { metaCopy } from "./meta";

export type Project = {
  company: string;
  name: string;
  shortname?: string;
  alts: {
    background: string;
  };
  background: string;
};

export const globalCopy = {
  meta: metaCopy,
  global: {
    email: "patrykordon@gmail.com",
    linkedin: "https://www.linkedin.com/in/patrykordon/",
  },
  menu: {
    about: "About me",
    projects: "Projects",
    contact: "Contact",
  },
  projects: {
    ask: {
      company: "UNIT9",
      name: "MTV: Acknowledge, Support, Keep-in-Touch (A.S.K.)",
      shortname: "MTV A.S.K.",
      alts: {
        background: "MTV A.S.K. background",
      },
      background: "/images/projects/ask/ask-background.jpg",
    },
    mtd: {
      company: "UNIT9",
      name: "Mountain Dew: Raid",
      shortname: "MTN DEW: Raid",
      alts: {
        background: "Mountain Dew: Raid background",
      },
      background: "/images/projects/mtd/mtd-background.png",
    },
    slimjim: {
      company: "UNIT9",
      name: "Slim Jim: Meataverse",
      alts: {
        background: "Slim Jim: Meataverse background",
      },
      background: "/images/projects/slimjim/slimjim-background.png",
    },
    jj: {
      company: "UNIT9",
      name: "Johnson & Johnson: All Sci No Fi",
      shortname: "J&J: All Sci No Fi",
      alts: {
        background: "Johnson & Johnson: All Sci No Fi background",
      },
      background: "/images/projects/jj/jj-background.png",
    },
    wimbledon: {
      company: "UNIT9",
      name: "Vodafone's Wimbledon Walk of Champions",
      shortname: "Vodafone's Wimbledon",
      alts: {
        background: "Wimbledon background",
      },
      background: "/images/projects/wimbledon/wimbledon-background.png",
    },
    riot: {
      company: "UNIT9",
      name: "League of Legends: Wild Rift - Legends of the Rift",
      shortname: "LOL: Wild Rift",
      alts: {
        background: "League of Legends: Wild Rift background",
      },
      background: "/images/projects/riot/riot-background.png",
    },
    fh: {
      company: "LIKI MS",
      name: "Frontend House: company website",
      shortname: "Frontend House",
      alts: {
        background: "Frontend House background",
      },
      background: "/images/projects/fh/fh-background.png",
    },
  } satisfies Record<string, Project>,
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
        summary:
          "A seasoned web developer with over four years of experience, I specialize in building dynamic, high-performance web applications using Next.js, React, and JavaScript. My portfolio showcases a diverse range of projects, including work for industry giants like Meta, Coca-Cola, Nike, Riot, Puma, MTV and many others. I bring a strong focus on user experience and code efficiency, ensuring that my solutions are not only visually appealing but also robust and scalable.",
        numbers: [
          { count: 4, label: "YEARS\nOF EXPERIENCE" },
          { count: 20, label: "CRAFTED\nPROJECTS" },
          { count: 9, label: "AWARDS" },
        ],
        techStack: {
          label: "Tech stack",
        },
      },
      projects: {
        label: "Projects",
      },
      contact: {
        label: "Contact",
        contact: {
          pre: "Let's keep in touch",
          linkedin: "on linkedin",
          or: "or",
          email: "send me an email",
        },
      },
    },
  },
};

export type Copy = typeof globalCopy;
