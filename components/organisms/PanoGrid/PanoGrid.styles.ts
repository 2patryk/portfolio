"use client";

import Link from "next/link";
import styled from "styled-components";
import { layoutView } from "@/utils/styles/mixins";

export const Wrapper = styled.main`
  min-height: 100vh;
  padding: 32rem 0 64rem;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: center;
`;

export const Inner = styled.div`
  ${layoutView}
  display: flex;
  flex-direction: column;
  gap: 40rem;
`;

export const Header = styled.header`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-family: var(--syne);
  font-size: 28rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
`;

export const ByLine = styled(Link)`
  display: flex;
  align-items: center;
  gap: 6rem;
  font-family: var(--figtree);
  font-size: 11rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.6;
  }
`;

export const LogoWrapper = styled.span`
  width: 14rem;
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Filters = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8rem;
`;

export const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6rem;
`;

export const FilterDivider = styled.div`
  width: 1px;
  height: 14rem;
  background: ${({ theme }) => theme.colors.backgroundExtra};
  flex-shrink: 0;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const FilterPill = styled.button<{ $active?: boolean }>`
  height: 26rem;
  padding: 0 10rem;
  border-radius: 13rem;
  border: 1px solid ${({ $active, theme }) =>
    $active ? theme.colors.textPrimary : theme.colors.backgroundExtra};
  background: ${({ $active, theme }) =>
    $active ? theme.colors.textPrimary : "transparent"};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.background : theme.colors.textSecondary};
  font-family: var(--figtree);
  font-size: 11rem;
  font-weight: 500;
  cursor: pointer;
  transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.textPrimary};
    color: ${({ $active, theme }) => !$active && theme.colors.textPrimary};
  }
`;

export const EmptyState = styled.p`
  font-family: var(--figtree);
  font-size: 13rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  grid-column: 1 / -1;
  padding: 40rem 0;
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
