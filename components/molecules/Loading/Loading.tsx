import { FC, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import * as Styled from "./Loading.styles";
import Logo from "@/components/atoms/Logo/Logo";
import useDisableScroll from "@/hooks/useDisableScroll";

type LoadingProps = {
  isLoading: boolean;
};

const Loading: FC<LoadingProps> = ({ isLoading }) => {
  const [isVisible, setIsVisible] = useState(isLoading);

  useEffect(() => {
    isLoading && setIsVisible(true);
  }, [isLoading]);

  useDisableScroll(isVisible, "loading");

  return (
    <AnimatePresence>
      {isVisible ? (
        <Styled.Wrapper>
          <Logo
            isLoading={isLoading}
            onFinish={() => {
              setIsVisible(false);
            }}
          />
        </Styled.Wrapper>
      ) : null}
    </AnimatePresence>
  );
};

export default Loading;
