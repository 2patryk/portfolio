import { fluidView, hover, outlineOnFocus } from "@/utils/styles/mixins";
import { mediaTablet, mediaDesktop } from "@/utils/styles/responsive";
import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const Summary = styled.p`
  white-space: pre-wrap;

  ${mediaTablet(css`
    max-width: 600rem;
  `)}

  ${mediaDesktop(css`
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
      width: 220rem;
    }
  `)}

  ${mediaDesktop(css`
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

    ${outlineOnFocus(3)}
    ${hover(css`
      opacity: 0.7;
    `)}
  }
`;

export const ProjectsGridWrapper = styled.div`
  ${fluidView};
  position: relative;
`;
