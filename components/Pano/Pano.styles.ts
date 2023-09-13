"use client";

import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div``;

export const Overlay = styled.div`
  pointer-events: none;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  width: 100%;
`;

export const Details = styled.div`
  margin: 42rem 54rem;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
`;

export const Subtitle = styled.h2``;

export const Ctas = styled.div``;

export const RefreshButton = styled.button`
  pointer-events: all;
  cursor: pointer;
  margin-left: 14rem;
`;

const rotating = keyframes`
 from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-359deg);
  }
`;

export const RefreshIcon = styled.img`
  width: 28rem;
  height: 28rem;
`;
