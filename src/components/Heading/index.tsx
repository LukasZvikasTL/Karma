import React, { FC } from "react";
import { Styled } from "./styles";

const Heading: FC<{ headingTitle: string; size?: number }> = props => (
  <Styled.Heading size={props.size}>{props.headingTitle}</Styled.Heading>
);

export default Heading;
