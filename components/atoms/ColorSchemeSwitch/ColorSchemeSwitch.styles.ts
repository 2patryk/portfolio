import styled from "styled-components";

export const Label = styled.label`
  display: block;
  width: 32rem;
  height: 32rem;
  padding: 4rem;
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  width: 24rem;
  height: 24rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;
