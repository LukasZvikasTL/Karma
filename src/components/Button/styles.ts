import styled from "styled-components";

const Button = styled.button<{ color?: string }>`
  padding: 10px 15px;
  background-color: ${props => props.color || "whitesmoke"};
  height: 40px;
  border-radius: 5px;
  border: 0;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
`;

export const Styled = {
  Button
};
