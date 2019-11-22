import styled from "styled-components";

const PurchaseItem = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`;

const PurhaseImage = styled.img`
  height: 190px;
  width: 150px;
  margin-right: 30px;
`;

const PurchaseItemContent = styled.div`
  marginleft: 20px;
`;

const PurchaseItemContentItem = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  color: #999999;
`;

const PurchaseItemContentItemHeading = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: #000;
  margin-bottom: 5px;
`;

export const Styled = {
  PurchaseItem,
  PurhaseImage,
  PurchaseItemContent,
  PurchaseItemContentItem,
  PurchaseItemContentItemHeading
};
