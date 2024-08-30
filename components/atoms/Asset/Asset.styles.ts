import NextImage from "next/image";
import styled from "styled-components";

export const Image = styled(NextImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
