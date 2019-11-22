import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: rgb(23, 23, 23);
  align-items: center;
  height: 100%;
`;

const HeaderItem = styled.div`
  font-weight: bold;
  color: #fff;
  margin-bottom: 40px;
  font-size: 25px;
`;

export const Styled = { HeaderWrapper, HeaderItem };
