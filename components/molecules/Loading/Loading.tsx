import { FC } from "react";

import * as Styled from "./Loading.styles";
import Logo from "@/components/atoms/Logo/Logo";

type LoadingProps = {
  isLoading?: boolean;
};

const Loading: FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Styled.Wrapper>
      <Styled.LogoWrapper>
        {/* <Styled.DotsBackground /> */}
        <Logo isLoading />
      </Styled.LogoWrapper>
    </Styled.Wrapper>
  );
};

export default Loading;
