import React from "react";
import {
  LoaderWrapper,
  BouncingLoaderContainer,
  Dot
} from "./styles";

export default function BouncingLoader() {
    return (
    <LoaderWrapper>
      <BouncingLoaderContainer>
        <Dot />
        <Dot />
        <Dot />
      </BouncingLoaderContainer>
    </LoaderWrapper>
  );
};

