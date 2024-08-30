import { FC, ReactNode } from "react";

import * as Styled from "./Highlight.styles";

export type HighlightProps = {
  label: string;
  content: string | ReactNode;
};

const Highlight: FC<HighlightProps> = ({ label, content }) => {
  return (
    <Styled.Wrapper>
      <Styled.Label>{label}</Styled.Label>
      <Styled.Body>{content}</Styled.Body>
    </Styled.Wrapper>
  );
};

export default Highlight;
