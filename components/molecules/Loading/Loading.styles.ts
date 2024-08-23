import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  height: 100dvh;
  width: 100vw;
  width: 100dvw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
`;

export const LogoWrapper = styled.div`
  position: relative;
  width: calc(100% - 100rem);
  height: calc(100% - 90rem);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DotsBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: url("/images/dot.svg");
  background-size: 20rem;
  background-position: center center;
  /* opacity: 0.3; */
  mask-image: radial-gradient(
    circle,
    rgba(0, 0, 0, 0) 20%,
    rgba(0, 0, 0, 1) 100%
  );
`;
