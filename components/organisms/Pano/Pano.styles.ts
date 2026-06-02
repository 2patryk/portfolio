"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.background};
  min-height: 100vh;

  .psv-loader-container {
    display: none;
  }
`;

export const LoadingOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const LoadingContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20rem;
`;

export const LoadingPlace = styled.p`
  font-family: var(--syne);
  font-size: 18rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
`;

export const LoadingMeta = styled.p`
  font-family: var(--figtree);
  font-size: 11rem;
  color: rgba(255, 255, 255, 0.3);
  margin: 0;
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const SpinnerTrack = styled.circle`
  stroke: ${({ theme }) => theme.colors.backgroundExtra};
  fill: none;
`;

export const SpinnerArc = styled.circle`
  stroke: ${({ theme }) => theme.colors.textSecondary};
  stroke-linecap: round;
  transform-origin: center;
  animation: ${spin} 1.1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
`;

export const PlanetThumb = styled(motion.img)`
  width: min(280px, 55vw);
  height: min(280px, 55vw);
  border-radius: 50%;
  display: block;
  object-fit: cover;
`;

export const BackButton = styled(Link)`
  pointer-events: all;
  position: fixed;
  top: 24rem;
  left: 32rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 0;
  padding-left: 0;
  width: 34rem;
  height: 34rem;
  padding: 0;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 28rem;
    height: 28rem;
  }
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(0, 0, 0, 0.25);
  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.05);
  text-decoration: none;
  opacity: 0.7;
  transition: border-color 0.2s ease, opacity 0.2s ease;
  z-index: 5;

  svg {
    width: 6rem;
    height: 10rem;
    flex-shrink: 0;
    transform: translateX(-0.5rem);
  }

  &:hover {
    opacity: 1;
    border-color: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    top: 20rem;
    left: 20rem;
  }
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

export const Controls = styled.div`
  pointer-events: all;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10rem;
  margin-top: 10rem;

  @media (min-width: 768px) {
    position: fixed;
    bottom: 40rem;
    right: 48rem;
    margin-top: 0;
    gap: 8rem;
  }
`;

export const NextButton = styled.button`
  display: flex;
  align-items: center;
  gap: 7rem;
  height: 34rem;
  padding: 0 12rem;
  border-radius: 17rem;

  @media (min-width: 768px) {
    height: 28rem;
    padding: 0 10rem;
    border-radius: 14rem;
  }
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(0, 0, 0, 0.25);
  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: border-color 0.2s ease, opacity 0.2s ease;
  opacity: 0.7;
  max-width: 160rem;

  span {
    font-family: var(--figtree);
    font-size: 9rem;
    font-weight: 500;
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  svg {
    width: 7rem;
    height: 7rem;
    fill: #fff;
    flex-shrink: 0;
  }

  &:hover {
    opacity: 1;
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

export const PlayPauseButton = styled.button`
  width: 34rem;
  height: 34rem;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 28rem;
    height: 28rem;
  }
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(0, 0, 0, 0.25);
  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-color 0.2s ease, opacity 0.2s ease;
  opacity: 0.7;

  svg {
    width: 9rem;
    height: 9rem;
    fill: #fff;
    display: block;
  }

  &:hover {
    opacity: 1;
    border-color: rgba(255, 255, 255, 0.5);
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
