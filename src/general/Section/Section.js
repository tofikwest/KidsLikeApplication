import React from "react";
import { SectionStyled } from "./SectionStyled";

const Section = ({ children }) => {
  return <SectionStyled className="Section">{children}</SectionStyled>;
};

export default Section;
