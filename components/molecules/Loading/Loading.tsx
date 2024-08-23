import { FC } from "react";

import * as Styled from "./Loading.styles";
import Logo from "@/components/atoms/Logo/Logo";

type LoadingProps = {};

const Loading: FC<LoadingProps> = () => {
  return (
    <Styled.Wrapper>
      <Logo />
    </Styled.Wrapper>
  );
};

export default Loading;
