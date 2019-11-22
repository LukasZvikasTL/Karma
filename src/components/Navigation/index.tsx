import React, { FC } from "react";
import { Styled } from "./styles";
import Karma from "../../karmasign.png";

const Header: FC<{}> = () => {
  return (
    <Styled.HeaderWrapper>
      <Styled.HeaderItem
        style={{
          fontSize: 45,
          marginTop: 40,
          marginBottom: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <img style={{ marginRight: 10 }} height={50} width={50} src={Karma} />{" "}
        Karma.
      </Styled.HeaderItem>
      <Styled.HeaderItem>HOME</Styled.HeaderItem>
      <Styled.HeaderItem>PURCHASES</Styled.HeaderItem>
      <Styled.HeaderItem>SUPPORT</Styled.HeaderItem>
      <div />
    </Styled.HeaderWrapper>
  );
};

export default Header;
