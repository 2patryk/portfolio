"use client";

import Link from "next/link";
import styled from "styled-components";

export const Wrapper = styled.nav`
  padding: 64rem;
`;

export const NavLink = styled(Link)`
  font-family: "Yatra One", cursive;
  color: black;
  font-size: 128rem;
  line-height: 1;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: rgba(0, 0, 0, 0.5);
  }
`;
