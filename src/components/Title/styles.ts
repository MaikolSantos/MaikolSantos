import styled from "styled-components";

export const Container = styled.h2`
  color: var(--color-brand-100);
  font-weight: var(--weight-medium);
  font-size: 1.5rem;
  width: max-content;
  text-align: center;

  ::after {
    content: '';
    display: block;
    background-color: var(--color-brand-100);
    height: 0.0625rem;
    width: 1.5rem;
    animation: line 1s ease-in-out alternate infinite;

    @keyframes line {
      to {
        width: 0;
      }
    }
  }
`;
