import { fluidView, layoutView } from "@/utils/styles/mixins";
import { mediaDesktop, mediaTablet } from "@/utils/styles/responsive";
import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const Summary = styled.p`
  white-space: pre-wrap;

  ${mediaTablet(css`
    max-width: 330rem;
  `)}
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(4)};

  ${mediaTablet(css`
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing(2)};
  `)}
`;

export const NumbersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(0.5)};
  justify-content: center;

  & > div {
    width: 100%;
  }

  ${mediaTablet(css`
    justify-content: flex-end;

    & > div {
      width: 200rem;
    }
  `)}
`;

export const Contact = styled.p`
  a {
    font-family: ${({ theme }) => theme.fonts.syne};
    text-decoration: underline;
    transition: opacity 0.2s ease-in-out;
    font-weight: 700;
  }

  a:hover {
    opacity: 0.7;
  }
`;

export const ProjectsWrapper = styled.div`
  position: relative;
  ${fluidView};
`;

export const Background = styled.div`
  position: absolute;
  /* top: -50rem; */
  top: 0;
  left: 0;
  width: 100%;
  /* height: calc(100% + 100rem); */
  height: 100%;
  z-index: -1;
  object-fit: cover;
  background-color: yellow;
  mask-image: url("/images/dot.svg");
  mask-size: 5rem;
  mask-repeat: repeat;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ProjectsContent = styled.div`
  ${layoutView};
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-template-rows: repeat(7, minmax(0, 250rem));
  gap: ${({ theme }) => theme.spacing(2)};

  ${mediaTablet(css`
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(5, minmax(0, 250rem));

    & > div:nth-child(1),
    & > div:nth-child(4),
    & > div:nth-child(7) {
      grid-column: span 2;
    }
  `)}

  ${mediaDesktop(css`
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: repeat(3, minmax(0, 250rem));

    & > div:nth-child(7) {
      grid-column: unset;
    }
  `)}
`;
