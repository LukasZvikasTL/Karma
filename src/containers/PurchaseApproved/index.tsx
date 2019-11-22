import React, { FC } from "react";
import { Styled } from "./styles";
import SuccessIcon from "../../assets/icons/success";
import Heading from "../../components/Heading";
import { LegalInfoWrapper } from "../../globalStyles";
import Button from "../../components/Button";
import Karma from "../../karmasign.png";
import { Styled as HeaderItemStyles } from "../../components/Navigation/styles";

const PurchaseReview: FC<{}> = props => {
  return (
    <Styled.PurchaseApprovedWrapper>
      <div style={{ position: "absolute", top: 30, left: 60 }}>
        <HeaderItemStyles.HeaderItem
          style={{
            fontSize: 45,
            marginTop: 40,
            marginBottom: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "black"
          }}
        >
          <img style={{ marginRight: 10 }} height={50} width={50} src={Karma} />{" "}
          Karma.
        </HeaderItemStyles.HeaderItem>
      </div>
      <Styled.PurchaseApprovedContent>
        <SuccessIcon size={100} />
        <div style={{ marginBottom: 50 }}></div>
        <Heading size={40} headingTitle="Purchase Approved!" />
        <div
          style={{
            marginTop: 50,
            marginBottom: 50,
            marginRight: 30,
            marginLeft: 50
          }}
        >
          <LegalInfoWrapper>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </LegalInfoWrapper>
        </div>
        <Button
          color="magenta"
          style={{
            height: 60,
            fontWeight: 700,
            fontSize: 16
          }}
          buttonTitle="Go back to the Merchant"
        />
      </Styled.PurchaseApprovedContent>
    </Styled.PurchaseApprovedWrapper>
  );
};

export default PurchaseReview;
