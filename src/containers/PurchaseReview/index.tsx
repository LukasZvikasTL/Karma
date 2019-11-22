import React, { FC, useEffect, useState } from "react";
import { Styled } from "./styles";
import Header from "../../components/Header";
import { PurchaseItem } from "../../model/PurchaseItem";
import Purchaseitem from "../../components/PurchaseItem";
import { getPurchase } from "../../middleware/purchase";
import Button from "../../components/Button";
import { LegalInfoWrapper } from "../../globalStyles";

const PurchaseReview: FC<{}> = props => {
  const [purchaseInfo, setPurchaseInfo] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const urlParams = new URLSearchParams(window.location.search);

      const purchaseId = urlParams.get("purchaseId");

      const result = await getPurchase(purchaseId || "");

      setLoading(false);
      if (result && result.data) {
        setPurchaseInfo(result.data);
      }
    };
    fetchData();
  }, []);

  const renderPurchaseItems = (purchaseItems: PurchaseItem[]) => {
    return purchaseItems.map((item: any) => (
      <Purchaseitem purchaseItem={item} />
    ));
  };

  return (
    <Styled.PurchaseReviewWrapper>
      <Header headingTitle="Purchase Review" />
      {loading || !purchaseInfo ? (
        <div>Loading...</div>
      ) : (
        <React.Fragment>
          <Styled.PurchaseItemsList>
            {renderPurchaseItems(purchaseInfo.items)}
          </Styled.PurchaseItemsList>
          <Styled.LegalInfoHeading>
            Important information
          </Styled.LegalInfoHeading>
          <div style={{ width: "70%" }}>
            <LegalInfoWrapper>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </LegalInfoWrapper>
          </div>
          <Styled.LegalInfoHeading>
            Delivery information
          </Styled.LegalInfoHeading>
          <div style={{ width: "70%" }}>
            <LegalInfoWrapper>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </LegalInfoWrapper>
          </div>
          <Button
            color="magenta"
            style={{
              marginTop: 20,
              height: 60,
              width: 220,
              fontWeight: "bold",
              fontSize: 20
            }}
            onClick={() =>
              (location.href = `http://localhost:8080/data/${purchaseInfo.purchaseId}`)
            }
            buttonTitle="Connect to the Bank"
          />
        </React.Fragment>
      )}
    </Styled.PurchaseReviewWrapper>
  );
};

export default PurchaseReview;
