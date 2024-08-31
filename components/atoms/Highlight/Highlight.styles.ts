import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const Label = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  ${({ theme }) => theme.typography("h5")};
  font-weight: 750;
  font-size: 10rem;
  /* background-color: ${({ theme }) => theme.colors.textSecondary}; */
  /* color: ${({ theme }) => theme.colors.background}; */
  /* padding: 0 ${({ theme }) => theme.spacing(1)}; */
`;

export const Body = styled.p`
  /* padding: 0 ${({ theme }) => theme.spacing(1)}; */
  font-weight: 400;
  text-transform: capitalize;
  text-align: right;
`;
