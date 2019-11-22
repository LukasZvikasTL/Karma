import React, { FC } from "react";
import { Styled } from "./styles";

const Button: FC<{
  buttonTitle: string;
  style?: any;
  color?: string;
}> = props => (
  <Styled.Button color={props.color} style={{ ...props.style }}>
    {props.buttonTitle}
  </Styled.Button>
);

export default Button;
