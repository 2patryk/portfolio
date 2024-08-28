import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Background = styled(Image)`
  object-fit: cover;
  z-index: -1;
  transition: transform 0.4s ease-in-out;
`;

export const AboutBox = styled.div`
  background-color: yellow;
  padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(2)}`};
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    ${({ theme }) => theme.colors.background} 100%
  );
  transition: font-weight 0.4s ease-in-out;
`;

export const Wrapper = styled(Link)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  ${({ theme }) => theme.typography("h4")};
  overflow: hidden;

  &:hover {
    ${Background} {
      transform: scale(1.1);
    }

    ${AboutBox} {
      font-weight: 750;
    }
  }
`;
