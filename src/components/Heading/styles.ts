import styled from "styled-components";

const Heading = styled.div<{ size?: number }>`
  font-weight: bold;
  background-color: inherit;
  font-size: ${props => props.size || 20}px;
`;

export const Styled = {
  Heading
};
