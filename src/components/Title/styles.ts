import styled from "styled-components";

export const Container = styled.h2`
  width: max-content;
  align-self: flex-start;

  font-weight: var(--weight-bold);
  font-size: clamp(1.5rem, 8vw, 4rem);
  color: var(--color-white);
  filter: drop-shadow(0rem 0rem 0.5rem #fff);
  
  ::after {
    content: "";
    display: block;
    background-color: var(--color-white);
    filter: drop-shadow(0rem 0rem 0.5rem #fff);
    height: 0.0625rem;
    width: 50%;
    animation: line 1s ease-in-out alternate infinite;

    @keyframes line {
      to {
        width: 0;
      }
    }
  }
`;
