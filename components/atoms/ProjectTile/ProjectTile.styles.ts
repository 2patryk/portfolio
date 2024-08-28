import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: gray;
  ${({ theme }) => theme.typography("h2")};
`;
