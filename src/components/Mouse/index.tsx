import React from "react";

import { Container, Rolling } from "./styles";

const Mouse = () => {
  return (
    <Container
      width="42"
      height="66"
      viewBox="0 0 42 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 64.5294C9.95294 64.5294 1 55.5765 1 44.5294V21C1 9.95294 9.95294 1 21 1C32.0471 1 41 9.95294 41 21V44.5294C41 55.5725 32.0431 64.5294 21 64.5294Z"
        stroke="#8FA2B2"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <Rolling
        d="M21 7.66675V32.7648"
        stroke="#FFF"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Container>
  );
};

export default Mouse;
