import { Variants } from "framer-motion";

export const logoAnimationsVariants: Variants = {
  initial: {
    clipPath: "polygon(0  100%, 100% 100%, 100% 100%, 0% 100%)",
  },
  loading: {
    clipPath: [
      "polygon(0  100%, 100% 100%, 100% 100%, 0% 100%)",
      "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
      "polygon(0 0%, 100% 0%, 100% 0%, 0% 0%)",
    ],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  finished: {
    clipPath: [
      "polygon(0  100%, 100% 100%, 100% 100%, 0% 100%)",
      "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
    ],
    transition: {
      delay: 0.2,
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};
