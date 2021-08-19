import React from 'react';
import Loader from 'react-loader-spinner';
import { LoaderStyled } from './LoaderStyled';

const LoaderComponent = () => {
  return (
    <LoaderStyled>
      <Loader
        type="Circles"
        color="#efbb43"
        height={50}
        width={50}
        timeout={3000} // 3 secs
      />
    </LoaderStyled>
  );
};

export default LoaderComponent;
