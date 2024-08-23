import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100rem;
  height: 74rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const LogoWrapper = styled.div<{ $progress?: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  ${({ $progress }) =>
    $progress !== undefined &&
    css`
      clip-path: polygon(0 ${($progress) * 100}%, 100% ${$progress * 100}%, 100% 100%, 0% 100%);
    `};
`;
