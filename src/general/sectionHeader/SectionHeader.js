import React from "react";
import { SectionHeaderStyled } from "./SectionHeaderStyled";

const SectionHeader = ({ children }) => {
  return <SectionHeaderStyled>{children}</SectionHeaderStyled>;
};

export default SectionHeader;
