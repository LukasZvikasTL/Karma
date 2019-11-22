import React, { FC } from "react";
import { Styled } from "./styles";
import { PurchaseItem } from "../../model/PurchaseItem";

const Purchaseitem: FC<{ purchaseItem: PurchaseItem }> = props => {
  console.log("PROPS", props);
  return (
    <Styled.PurchaseItem>
      <Styled.PurhaseImage src={props.purchaseItem.itemPictureUrl} />
      <Styled.PurchaseItemContent>
        <Styled.PurchaseItemContentItem>
          <Styled.PurchaseItemContentItemHeading>
            Description
          </Styled.PurchaseItemContentItemHeading>
          {props.purchaseItem.itemDescription}
        </Styled.PurchaseItemContentItem>
        <Styled.PurchaseItemContentItem>
          <Styled.PurchaseItemContentItemHeading>
            Price
          </Styled.PurchaseItemContentItemHeading>
          {props.purchaseItem.amount} {props.purchaseItem.currency}
        </Styled.PurchaseItemContentItem>
      </Styled.PurchaseItemContent>
    </Styled.PurchaseItem>
  );
};

export default Purchaseitem;
