import styled from "styled-components";

export const SeparatorLine = styled.div<{
  color?: string;
  width: number | string;
}>`
  height: 0.5px;
  width: ${props => props.width};
  background-color: ${props => props.color || "#000"};
`;

export const LegalInfoWrapper = styled.div`
  line-height: 25px;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 30px;
`;
