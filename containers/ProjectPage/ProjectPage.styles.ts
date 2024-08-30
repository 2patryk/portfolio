import { layoutView } from "@/utils/styles/mixins";
import { mediaDesktop, mediaTablet } from "@/utils/styles/responsive";
import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const Content = styled.div`
  ${layoutView};
  display: flex;
  flex-direction: column-reverse;
  gap: ${({ theme }) => theme.spacing(4)};

  ${mediaTablet(css`
    flex-direction: row;
  `)}
`;

export const Description = styled.div`
  width: 100%;
  ${({ theme }) => theme.colors.textSecondary};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};

  p {
    text-align: justify;
    white-space: pre-wrap;
  }

  p:first-of-type {
    margin-bottom: ${({ theme }) => theme.spacing(3)};
  }

  ${mediaTablet(css`
    flex: 0.55;
  `)}

  ${mediaDesktop(css`
    flex: 0.65;
  `)}
`;

export const Highlights = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > div {
    margin-top: -2rem;
  }

  & > div:first-child {
    margin-top: 0;
  }

  ${mediaTablet(css`
    flex: 0.45;
  `)}

  ${mediaDesktop(css`
    flex: 0.35;
  `)}
`;

export const Assets = styled.div<{ $count?: number }>`
  ${layoutView};
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(4)} 0;

  & > div,
  video {
    aspect-ratio: 3 / 2;
  }

  ${mediaTablet(css`
    grid-template-columns: repeat(2, minmax(0, 1fr));
  `)}

  ${({ $count }) =>
    $count === 3 &&
    css`
      ${mediaTablet(css`
        & > div:nth-child(3),
        & > video:nth-child(3) {
          grid-column: span 2;
        }
      `)}
    `};
`;

export const WideAsset = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2 / 1;

  ${mediaTablet(css`
    aspect-ratio: 7 / 2;
  `)}
`;
