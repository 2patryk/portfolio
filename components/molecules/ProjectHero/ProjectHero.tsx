import { ProjectCopy } from "@/utils/copy";
import { FC, useEffect, useRef } from "react";

import * as Styled from "./ProjectHero.styles";
import { useInView } from "framer-motion";
import { useGlobalStore } from "@/utils/global.store";

type ProjectHeroProps = {
  projectCopy: ProjectCopy;
};

const ProjectHero: FC<ProjectHeroProps> = ({ projectCopy: copy }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });
  const { setHeaderTheme } = useGlobalStore();

  useEffect(() => {
    setHeaderTheme(isInView ? "dark" : undefined);

    return () => {
      setHeaderTheme(undefined);
    };
  }, [isInView]);

  return (
    <Styled.Wrapper ref={ref}>
      <Styled.Cover>
        <Styled.Background
          fill
          alt={copy.alts.background}
          src={copy.background}
        />
        <Styled.Mask $colors={copy.colors} />
      </Styled.Cover>
      <Styled.Content>
        <Styled.Title>{copy.name}</Styled.Title>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default ProjectHero;
