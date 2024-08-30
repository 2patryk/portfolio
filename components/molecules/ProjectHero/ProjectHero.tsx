import { ProjectCopy } from "@/utils/copy";
import { FC, useEffect, useRef } from "react";

import * as Styled from "./ProjectHero.styles";
import { easeOut, useInView, useScroll, useTransform } from "framer-motion";
import { useGlobalStore } from "@/utils/global.store";

type ProjectHeroProps = {
  projectCopy: ProjectCopy;
};

const ProjectHero: FC<ProjectHeroProps> = ({ projectCopy: copy }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });
  const { setHeaderTheme } = useGlobalStore();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"], {
    ease: easeOut,
  });

  useEffect(() => {
    setHeaderTheme(isInView ? "dark" : undefined);

    return () => {
      setHeaderTheme(undefined);
    };
  }, [isInView]);

  return (
    <Styled.Wrapper ref={ref}>
      <Styled.Cover>
        <Styled.BackgroundWrapper style={{ y }}>
          <Styled.Background
            fill
            alt={copy.alts.background}
            src={copy.background}
            quality={95}
          />
          <Styled.Mask $colors={copy.colors} />
        </Styled.BackgroundWrapper>
      </Styled.Cover>
      <Styled.Content>
        <Styled.Title>{copy.name}</Styled.Title>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default ProjectHero;
