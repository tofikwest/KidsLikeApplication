import React from "react";
import Loader from "react-loader-spinner";
import { LoaderStyled } from "./LoaderStyled";

const LoaderComponent = () => {
  return (
    <LoaderStyled>
      <Loader
        type="Circles"
        color="#efbb43"
        height={70}
        width={70}
        timeout={3000} // 3 secs
        className="loader"
      />
    </LoaderStyled>
  );
};

export default LoaderComponent;
