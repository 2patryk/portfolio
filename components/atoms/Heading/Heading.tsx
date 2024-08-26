import { FC } from "react";

import * as Styled from "./Heading.styles";

type HeadingProps = {
  label: string;
};

const Heading: FC<HeadingProps> = ({ label }) => {
  return <Styled.Wrapper>{label} </Styled.Wrapper>;
};

export default Heading;
