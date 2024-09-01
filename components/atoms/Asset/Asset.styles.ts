import NextImage from "next/image";
import styled from "styled-components";

export const Image = styled(NextImage)`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Video = styled.video`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Wrapper = styled.div`
  position: relative;
`;
