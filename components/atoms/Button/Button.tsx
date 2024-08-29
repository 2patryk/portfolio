import { FC, HTMLAttributeAnchorTarget } from "react";
import * as Styled from "./Button.styles";

export enum ButtonVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export type ButtonProps = {
  href: string;
  label: string;
  variant?: ButtonVariant;
  target?: HTMLAttributeAnchorTarget;
};

const Button: FC<ButtonProps> = ({
  href,
  label,
  variant = ButtonVariant.PRIMARY,
  target,
}) => {
  return (
    <Styled.Wrapper target={target} href={href as any} $variant={variant}>
      {label}
    </Styled.Wrapper>
  );
};

export default Button;
