import { Project } from "../config";
import { metaCopy } from "./meta";

export enum Category {
  GAME = "game",
  VR = "VR",
  BLOCKCHAIN = "blockchain",
  WEBSITE = "website",
}

export enum Platform {
  MOBILE = "mobile",
  DESKTOP = "desktop",
  VR = "vr",
}

export type Asset = {
  src: string;
  type: "video" | "image";
  size?: "normal" | "wide";
  alt?: string;
};

export type ProjectCopy = {
  id?: string;
  company: string;
  categories: Array<Category>;
  name: string;
  shortname?: string;
  colors?: {
    primary: string;
    secondary: string;
  };
  alts: {
    background: string;
  };
  dates: {
    from: string;
    to: string;
  };
  background: string;
  description?: string;
  highlights: {
    role: string;
    brand: Array<string>;
    platforms: Array<Platform>;
    awards?: Array<string>;
  };
  assets?: Array<Asset>;
  responsibilities?: string;
};

export const globalCopy = {
  meta: metaCopy,
  global: {
    name: "Patryk Ordon",
    email: "patrykordon@gmail.com",
    linkedin: "https://www.linkedin.com/in/patrykordon/",
    github: "https://github.com/2patryk",
    lastUpdate: "2024-09-03",
  },
  menu: {
    about: "About me",
    projects: "Projects",
    contact: "Contact",
  },
  projects: {
    ask: {
      company: "UNIT9",
      categories: [Category.WEBSITE],
      name: "MTV: Acknowledge, Support, Keep-in-Touch (A.S.K.)",
      shortname: "MTV A.S.K.",
      colors: {
        primary: "#bc947c",
        secondary: "#9e92a7",
      },
      alts: {
        background: "MTV A.S.K. background",
      },
      dates: {
        from: "2024-03-01",
        to: "2024-05-01",
      },
      background: "/images/projects/ask/ask-background.jpg",
      description:
        'In collaboration with SHOWTIME/MTV Entertainment Studios and the mental health nonprofit Active Minds, this project aimed to empower young people to support their peers through difficult conversations. At its core was the A.S.K. framework—Acknowledge, Support, and Keep-in-Touch—designed to guide users in providing emotional support. The initiative featured two digital experiences: an interactive "choose-your-own-adventure" YouTube video and a mobile-first website.\n\nThe website was central to the experience, offering users a concise explanation of the A.S.K. framework. It included interactive tools like SMS-based conversations, a chatbot, an emotions wheel, and a calendar reminder to check in on friends. The design featured a story-like landing page with parallax animations and downloadable social media content to promote healthy support practices, making it a comprehensive resource for fostering empathy and communication skills.',
      highlights: {
        role: "Frontend developer",
        platforms: [Platform.DESKTOP, Platform.MOBILE],
        brand: ["Showtime", "MTV"],
        awards: ["FWA"],
      },
      responsibilities:
        "I was one of the main front-end developers working on the site. I implemented most of the content, including animations, transitions, accessibility features, and scroll navigation.",
      assets: [
        {
          src: "/images/projects/ask/ask-wide.png",
          type: "image",
          size: "wide",
        },
        {
          src: "/videos/ask1.mp4",
          type: "video",
        },
        {
          src: "/videos/ask2.mp4",
          type: "video",
        },
        {
          src: "/videos/ask3.mp4",
          type: "video",
        },
        {
          src: "/videos/ask4.mp4",
          type: "video",
        },
      ],
    },
    mtd: {
      company: "UNIT9",
      categories: [Category.WEBSITE],
      name: "Mountain Dew: Raid",
      shortname: "MTN DEW: Raid",
      colors: {
        primary: "#048c04",
        secondary: "#020301",
      },
      alts: {
        background: "Mountain Dew: Raid background",
      },
      dates: {
        from: "2023-08-01",
        to: "2023-12-01",
      },
      background: "/images/projects/mtd/mtd-background.png",
      highlights: {
        role: "Frontend developer",
        brand: ["Mountain Dew"],
        platforms: [Platform.DESKTOP, Platform.MOBILE],
      },
      description:
        "Mountain Dew, known for its bold flavors and connection to the gaming community, sought to elevate emerging Twitch streamers by leveraging cutting-edge technology. The goal was to organically boost streamer visibility and help them grow their audiences. The result was Mountain Dew Raid, an innovative initiative powered by AI. We developed a smart crawler that scanned active Twitch streams, identifying those with Mountain Dew products visible on camera. Streamers who were detected were invited to join the Raid, giving them tools and incentives to expand their reach on Twitch.\n\nThe custom-built AI model was fine-tuned to recognize subtle branding differences and scan thousands of streams in real-time using a distributed network of 50 GPU-powered virtual machines. The initiative provided unique rewards, such as spots on the Mountain Dew Gaming Channel, one-on-one coaching, and access to a community of like-minded streamers. By spotlighting Mountain Dew's biggest fans, this project not only rewarded brand loyalty but also demonstrated the powerful potential of AI in reshaping digital interactions.",
      responsibilities:
        "I was responsible for developing the admin panel for moderators, which streamlined the process of managing and promoting the identified streamers. Additionally, I created a video plugin for the Twitch platform to support this functionality.",
      assets: [
        {
          src: "/images/projects/mtd/mtd1.png",
          type: "image",
        },
        {
          src: "/images/projects/mtd/mtd2.png",
          type: "image",
        },
        {
          src: "/images/projects/mtd/mtd3.png",
          type: "image",
        },
      ],
    },
    slimjim: {
      company: "UNIT9",
      categories: [Category.WEBSITE, Category.BLOCKCHAIN],
      name: "Slim Jim: Meataverse",
      colors: {
        primary: "#080c84",
        secondary: "#f9c919",
      },
      alts: {
        background: "Slim Jim: Meataverse background",
      },
      dates: {
        from: "2023-01-01",
        to: "2023-07-01",
      },
      background: "/images/projects/slimjim/slimjim-background.png",
      highlights: {
        role: "Frontend developer",
        brand: ["Slim Jim"],
        platforms: [Platform.DESKTOP, Platform.MOBILE],
        awards: [
          "AI, Metaverse & Virtual, Best Community Engagement Honoree, 2024",
        ],
      },
      assets: [
        {
          src: "/videos/sj1.mp4",
          type: "video",
        },
        {
          src: "/videos/sj2.mp4",
          type: "video",
        },
        {
          src: "/videos/sj3.mp4",
          type: "video",
        },
        {
          src: "/videos/sj4.mp4",
          type: "video",
        },
        {
          src: "/images/projects/slimjim/slimjim-wide.png",
          type: "image",
          size: "wide",
        },
      ],
      description:
        "Slim Jim ventured into web3 with the launch of the Meataverse, their first-ever digital membership club. Designed to be accessible to everyone, regardless of web3 experience, the Meataverse offered members a playful and interactive NFT experience. At its core were 10,069 unique NFTs called GigaJims, distributed on a first-come, first-served basis. Members could evolve their GigaJim by applying S.A.U.C.E., a currency earned by scanning Slim Jim products and engaging with the brand. With over 10 million possible GigaJim combinations, users could personalize and compete for the highest rarity scores.\n\nThe Meataverse was built with a focus on user-friendly technology, using a custom-built API to mint and evolve GigaJims directly on the Polygon blockchain. This seamless, frictionless experience catered to both NFT novices and seasoned collectors. The Meataverse's initial success saw GigaJims quickly claimed and traded on open marketplaces. With its innovative platform and mechanics, the Meataverse is poised for future expansions, blending sophisticated tech with fun, engaging content.",
      responsibilities:
        "I was responsible for implementing UI and animations. The project was unique due to its pixel art graphics which presented a challenge in terms of responsiveness but allowed me to grow significantly in this area.",
    },
    jj: {
      company: "UNIT9",
      categories: [Category.WEBSITE],
      name: "Johnson & Johnson: All Sci No Fi",
      shortname: "J&J: All Sci No Fi",
      colors: {
        primary: "#47649c",
        secondary: "#20242c",
      },
      alts: {
        background: "Johnson & Johnson: All Sci No Fi background",
      },
      dates: {
        from: "2022-10-01",
        to: "2023-01-01",
      },
      background: "/images/projects/jj/jj-background.png",
      highlights: {
        role: "Frontend developer",
        brand: ["Johnson & Johnson"],
        platforms: [Platform.DESKTOP, Platform.MOBILE],
      },
      description:
        "Johnson & Johnson sought to revolutionize their recruitment process with a futuristic twist as part of their \"All Sci No Fi\" campaign. We designed an innovative recruitment website targeting candidates with medical and scientific expertise. The site offers an immersive 3D experience where users can explore a carousel of cutting-edge innovations. Each innovation is presented as something out of science fiction, with subpages providing more details and linking to relevant job opportunities within the company.\n\nThe website's sci-fi-inspired design features WebGL spatial treatment, futuristic typography, and dynamic motion graphics, creating a captivating user experience. Candidates navigate through the 3D environment, discovering real-world technologies that could be part of their future careers. The site also includes film trailer-style videos and a custom CMS, allowing Johnson & Johnson to easily update content. This unique digital hub not only showcases the company's innovations but also highlights the significant impact candidates can have by joining Johnson & Johnson.",
      responsibilities:
        "I was responsible for implementing the UI of the page including motions and transitions.",
      assets: [
        {
          src: "/videos/jj1.mp4",
          type: "video",
        },
        {
          src: "/videos/jj2.mp4",
          type: "video",
        },
        {
          src: "/videos/jj3.mp4",
          type: "video",
        },
        {
          src: "/videos/jj4.mp4",
          type: "video",
        },
      ],
    },
    wimbledon: {
      company: "UNIT9",
      categories: [Category.WEBSITE, Category.GAME],
      name: "Vodafone's Wimbledon Walk of Champions",
      shortname: "Vodafone's\nWimbledon",
      colors: {
        primary: "#849843",
        secondary: "#c4c4b4",
      },
      alts: {
        background: "Wimbledon background",
      },
      dates: {
        from: "2022-03-01",
        to: "2022-07-01",
      },
      background: "/images/projects/wimbledon/wimbledon-background.png",
      highlights: {
        role: "Frontend developer",
        brand: ["Vodafone"],
        platforms: [Platform.DESKTOP, Platform.MOBILE, Platform.VR],
        awards: ["FWA"],
      },
      description:
        "Vodafone brought tennis fans closer to Wimbledon’s rich history with the Wimbledon Walk of Champions, a VR experience that lets users virtually walk the iconic path to Centre Court through the eyes of a player. Guided by British tennis legend Tim Henman, fans navigated through the historic corridors of the stadium, experiencing the excitement and emotions felt by the sport's greatest champions. Along the way, they interacted with bonus content, including videos and live portraits, that deepened their connection to the tournament's storied past.\n\nThe VR experience, built with cutting-edge WebXR technology using PlayCanvas, WebGL, and other advanced tools, debuted live at Wimbledon and was also made available online, reaching a global audience of tennis enthusiasts. This project marked the first time fans could explore this exclusive part of Wimbledon up close, blending the real and virtual worlds in an immersive, educational, and emotional journey that highlighted the tournament's legacy and Vodafone's innovative spirit.",
      responsibilities:
        "I was responsible for the frontend communication with PlayCanvas, UI and animations.",
      assets: [
        {
          src: "/videos/w1.mp4",
          type: "video",
        },
        {
          src: "/videos/w2.mp4",
          type: "video",
        },
        {
          src: "/images/projects/wimbledon/wimbledon-wide.png",
          type: "image",
        },
        {
          src: "/videos/w3.mp4",
          type: "video",
        },
        {
          src: "/videos/w4.mp4",
          type: "video",
        },
      ],
    },
    riot: {
      company: "UNIT9",
      categories: [Category.GAME],
      name: "League of Legends: Wild Rift - Legends of the Rift",
      shortname: "LOL: Wild Rift",
      colors: {
        secondary: "#cfbdaa",
        primary: "#945833",
      },
      alts: {
        background: "League of Legends: Wild Rift background",
      },
      dates: {
        from: "2021-03-01",
        to: "2021-03-31",
      },
      background: "/images/projects/riot/riot-background.png",
      highlights: {
        role: "Frontend developer",
        brand: ["Riot Games"],
        platforms: [Platform.MOBILE],
      },
      assets: [
        {
          src: "/videos/riot1.mp4",
          type: "video",
        },
        {
          src: "/videos/riot2.mp4",
          type: "video",
        },
        {
          src: "/images/projects/riot/riot.jpg",
          type: "image",
        },
      ],
      description:
        "In celebration of the highly anticipated launch of League of Legends: Wild Rift in the U.S. and Latin America, fans were rewarded with the chance to unlock the game a full day ahead of its official release. The Legends of the Rift project was a virtual treasure hunt that allowed players to explore an 8K image—a stunning visual showcasing all 61 champions in the game. Created in collaboration with CGI studio Illusion, this interactive experience invited users to discover hidden crystals within the image, unlocking early access to the game. The mobile experience was designed to be accessible across various devices, offering exclusive content and an engaging way to delve into the rich world of League of Legends.\n\nThe project, developed in just a few short weeks, was a testament to the team's dedication and flawless execution. The treasure hunt featured 61 hotspots and five hidden crystals, which, when unlocked, rewarded players with an early download link and a digital mural. This innovative approach not only built excitement but also deepened fans' connection to the game, resulting in a huge payoff as the launch approached. The campaign successfully harnessed fan enthusiasm, delivering an unforgettable experience that blended art, technology, and the thrill of gaming.",
      responsibilities:
        "I was responsible for implementing whole UI. It was my first project as UNIT9er.",
    },
    fh: {
      company: "LIKI MS",
      categories: [Category.WEBSITE],
      name: "Frontend House: company website",
      shortname: "Frontend House",
      colors: {
        secondary: "#600cfa",
        primary: "#090431",
      },
      alts: {
        background: "Frontend House background",
      },
      dates: {
        from: "2020-10-01",
        to: "2021-02-01",
      },
      background: "/images/projects/fh/fh-background.png",
      highlights: {
        role: "Frontend developer",
        brand: ["LIKI MS", "Frontend House"],
        platforms: [Platform.DESKTOP, Platform.MOBILE],
      },
      description:
        "A portfolio website developed to showcase the Frontend House. The site includes multiple sections to highlight various projects and a blog for sharing insights and updates. It also serves to provide information about the company's services, team, and contact details. The site was built using Next.js with Static Site Generation (SSG).",
      responsibilities:
        "I was responsible for implementing the UI, animations, CMS and backend integration.",
      assets: [
        {
          src: "/images/projects/fh/fh1.png",
          type: "image",
        },
        {
          src: "/images/projects/fh/fh2.png",
          type: "image",
        },
      ],
    },
  } satisfies Record<Project, ProjectCopy>,
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
    projects: {
      highlights: {
        role: "My role",
        duration: "Project duration",
        release: "Release date",
        awards: "Awards",
        category: "Category",
        platform: "Platform",
        brand: "Brand",
        company: "Company",
      },
      related: "Other projects",
    },
  },
  footer: {
    lastUpdate: "Last update",
    links: {
      label:"You can find me on:"
    }
  },
  errors: {
    notFound: {
      title: "Not found",
      cta: "Go back home",
    },
  },
};

export type Copy = typeof globalCopy;
