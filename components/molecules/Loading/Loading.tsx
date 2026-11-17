import { FC, useState } from "react";
import { AnimatePresence } from "framer-motion";

import * as Styled from "./Loading.styles";
import Logo from "@/components/atoms/Logo/Logo";
import useDisableScroll from "@/hooks/useDisableScroll";

type LoadingProps = {
  isLoading: boolean;
};

const Loading: FC<LoadingProps> = ({ isLoading }) => {
  const [isVisible, setIsVisible] = useState(isLoading);
  const [wasLoading, setWasLoading] = useState(isLoading);

  // Re-show the loader whenever loading starts again
  if (isLoading !== wasLoading) {
    setWasLoading(isLoading);
    if (isLoading) setIsVisible(true);
  }

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
