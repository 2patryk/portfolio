import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.h3`
  ${({ theme }) => theme.typography("h5")};
  background-color: ${({ theme }) => theme.colors.textSecondary};
  color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing(1)};
  position: absolute;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  position: relative;
  border: 2rem solid ${({ theme }) => theme.colors.textSecondary};
  width: 100%;
  padding: ${({ theme }) => theme.spacing(1)};
  height: 100rem;
`;
