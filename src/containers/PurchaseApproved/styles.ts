import styled from "styled-components";

const PurchaseApprovedWrapper = styled.div`
  display:flex
  justify-content: center;
  align-items: center;
  background-color: whitesmoke
  height: 100vh;
  width: 100vw;
`;

const PurchaseApprovedContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 30%
  justifwidth: 100%;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  padding: 120px;
  flex-direction: column;
`;

export const Styled = {
  PurchaseApprovedWrapper,
  PurchaseApprovedContent
};
