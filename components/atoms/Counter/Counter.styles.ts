import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.typography("h4")};
  display: flex;
  gap: ${({ theme }) => theme.spacing(1.25)};
  justify-content: baseline;
`;

export const Count = styled.span`
  width: 45rem;
  text-align: right;
  font-weight: 780;
  flex-shrink: 0;
`;

export const Label = styled.span`
  white-space: pre-wrap;
  flex-shrink: 0;
`;
