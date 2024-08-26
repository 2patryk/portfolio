import { FC, ReactNode } from "react";

import * as Styled from "./Section.styles";
import Heading from "../Heading/Heading";

type SectionProps = {
  heading: string;
  children: ReactNode;
};

const Section: FC<SectionProps> = ({ heading, children }) => {
  return (
    <Styled.Wrapper>
      <Heading label={heading} />
      {children}
    </Styled.Wrapper>
  );
};

export default Section;
