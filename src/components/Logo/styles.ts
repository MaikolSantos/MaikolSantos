import styled from "styled-components";

export const Container = styled.svg`
  width: 100%;
  max-width: 12.5rem;
`;

export const Shine = styled.path`
  opacity: 0.5;
  animation: shine 2s linear infinite alternate;

  @keyframes shine {
    from {
      opacity: 1;
      filter: brightness(1.5);
    }
  }
`;
