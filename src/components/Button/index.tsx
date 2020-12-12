import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface ButtonLinkProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

const Button: React.FC<ButtonLinkProps> = ({ children, ...rest }) => {
  return (
    <Container {...rest}  type="button"  >
      {children}
    </Container>
  );
};

export default Button;
