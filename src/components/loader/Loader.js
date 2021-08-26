import React from "react";
import Loader from "react-loader-spinner";

const LoaderComponent = () => {
  return (
    <Loader
      type="Circles"
      color="#efbb43"
      height={100}
      width={100}
      timeout={3000} // 3 secs
      className="loader"
    />
  );
};

export default LoaderComponent;
