import { FC } from "react";
import * as Styled from "./Counter.styles";

export type CounterProps = { label: string; count: number; plus?: boolean };

const Counter: FC<CounterProps> = ({ label, count, plus = false }) => {
  return (
    <Styled.Wrapper>
      <Styled.Count>
        {count}
        {plus ? "+" : ""}
      </Styled.Count>
      <Styled.Label>{label}</Styled.Label>
    </Styled.Wrapper>
  );
};

export default Counter;
