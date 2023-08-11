import styled from "styled-components";

import { ContainerSections } from "../../../../styles/Containers";

export const Container = styled(ContainerSections)`
  position: relative;
  z-index: 1;
  text-align: center;
  height: 100%;
  overflow-x: hidden ;

  p {
    font-weight: var(--weight-semibold);
    font-size: clamp(1rem, 5vw, 2.5rem);
    color: var(--color-white);
  }

  h1 {
    font-weight: var(--weight-bold);
    font-size: clamp(2rem, 10vw, 6rem);
    color: var(--color-brand-100);
    filter: drop-shadow(0rem 0rem 0.5rem #197de5);
  }

  strong {
    display: flex;
    align-items: flex-end;
    font-weight: var(--weight-light);
    font-size: clamp(1.25rem, 5vw, 2rem);
    line-height: 1;
    filter: drop-shadow(0rem -0.25rem 0.2rem #197de5);
  }

  a {
    margin-top: 1rem;
  }

  @keyframes astronaut {
    to {
      transform: scaleX(-1) translateY(-100px) rotate(-20deg);
    }
  }
  
  img {
    transform: scaleX(-1);
    position: absolute;
    animation: astronaut 10s linear infinite alternate;
    max-width: 150px;
    bottom: 60px;
    right: 0px;

    @media (min-width: 600px) {
      max-width: 250px;
      bottom: 60px;
      right: -50px;
    }
  }
`;
