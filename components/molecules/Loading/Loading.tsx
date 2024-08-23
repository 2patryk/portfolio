import { FC } from "react";

import * as Styled from "./Loading.styles";
import Logo from "@/components/atoms/Logo/Logo";

type LoadingProps = {
  progress: number;
};

const Loading: FC<LoadingProps> = ({ progress }) => {
  return (
    <Styled.Wrapper>
      <Styled.LogoWrapper>
        {/* <Styled.DotsBackground /> */}
        <Logo progress={progress} />
      </Styled.LogoWrapper>
    </Styled.Wrapper>
  );
};

export default Loading;
