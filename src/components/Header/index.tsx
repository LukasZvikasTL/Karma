import React, { FC } from "react";
import Heading from "../Heading";
import { SeparatorLine } from "../../globalStyles";

const Header: FC<{ headingTitle: string }> = props => {
  return (
    <React.Fragment>
      <Heading size={35} headingTitle={props.headingTitle} />
      <div style={{ marginTop: 30 }}></div>
      <SeparatorLine color="#a9a9a9" width={"100%"} />
    </React.Fragment>
  );
};

export default Header;
