import { FC } from "react";

import * as Styled from "./Highlight.styles";

export type HighlightProps = {
  label: string;
};

const Highlight: FC<HighlightProps> = ({ label }) => {
  return (
    <Styled.Wrapper>
      <Styled.Content>
        <Styled.Label>{label}</Styled.Label>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default Highlight;
