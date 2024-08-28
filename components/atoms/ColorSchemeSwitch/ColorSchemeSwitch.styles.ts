import styled from "styled-components";

export const Label = styled.label`
  display: block;
  width: 22rem;
  height: 22rem;
  padding: 3rem;
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  width: 16rem;
  height: 16rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;
