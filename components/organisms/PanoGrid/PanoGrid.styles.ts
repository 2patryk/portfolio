"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styled from "styled-components";
import { layoutView } from "@/utils/styles/mixins";

export const Wrapper = styled.main`
  min-height: 100vh;
  padding: 64rem 0;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: center;
`;

export const Inner = styled.div`
  ${layoutView}
`;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40rem 24rem;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 850px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 380px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled(Link)<{ $loading?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12rem;
  text-decoration: none;
  color: inherit;
  cursor: ${({ $loading }) => ($loading ? "wait" : "pointer")};
  opacity: ${({ $loading }) => ($loading ? 0.5 : 1)};
  transition: opacity 0.3s ease;

  &:hover img {
    transform: ${({ $loading }) => ($loading ? "none" : "scale(1.07)")};
  }
`;

export const PlanetWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    transition: transform 0.5s ease;
    display: block;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  text-align: center;
`;

export const Place = styled.h2`
  font-family: var(--syne);
  font-size: 13rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
`;

export const Meta = styled.p`
  font-family: var(--figtree);
  font-size: 11rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
`;

export const TransitionOverlay = styled(motion.div)`
  position: fixed;
  overflow: hidden;
  z-index: 1000;
  pointer-events: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
