import styled from "styled-components";

const numbers = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97,
];

export const Container = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: -1;

  @media (min-width: 750px) {
    width: 100%;
    height: auto;
    top: 50%;
    transform: translateY(-50%);
  }

  @keyframes star {
    0% {
      opacity: 0;
      transform: translateY(0px);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(-100px);
    }
  }

  > circle {
    animation: star 15s linear infinite;

    ${numbers
      .map(
        (number, index) => `
      &:nth-child(${number}) {
        animation: star 10s ease-in-out infinite;
      }
    `
      )
      .join("")}
  }
`;
