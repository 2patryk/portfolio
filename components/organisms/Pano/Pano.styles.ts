"use client";

import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  background: #000;
  min-height: 100vh;

  .psv-loader-container {
    display: none;
  }
`;

export const LoadingOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const PlanetThumb = styled(motion.img)`
  width: min(280px, 55vw);
  height: min(280px, 55vw);
  border-radius: 50%;
  display: block;
  object-fit: cover;
`;

export const Overlay = styled.div`
  pointer-events: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  width: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.55) 0%, transparent 100%);
  padding-bottom: 32rem;

  @media (min-width: 768px) {
    padding-bottom: 40rem;
  }
`;

export const Details = styled.div`
  margin: 32rem 24rem 0;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (min-width: 768px) {
    margin: 48rem 54rem 0;
    gap: 6rem;
  }
`;

export const Label = styled.span`
  font-family: var(--figtree);
  font-size: 9rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);

  @media (min-width: 768px) {
    font-size: 10rem;
  }
`;

export const Title = styled.h1`
  font-family: var(--syne);
  font-size: 32rem;
  font-weight: 600;
  line-height: 1;
  color: #fff;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 44rem;
  }
`;

export const Subtitle = styled.h2`
  font-family: var(--figtree);
  font-size: 11rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.65);
  margin: 0;

  @media (min-width: 768px) {
    font-size: 13rem;
  }
`;

export const Ctas = styled.div``;

export const RefreshButton = styled.button`
  pointer-events: all;
  cursor: pointer;
  margin-left: 14rem;
`;

const rotating = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(-359deg); }
`;

export const RefreshIcon = styled.img`
  width: 28rem;
  height: 28rem;
`;
