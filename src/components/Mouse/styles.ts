import styled from "styled-components";

export const Container = styled.svg`
  width: 2rem;
  position: absolute;
  bottom: 1rem;
`;

export const Rolling = styled.path`
  animation: rolling 2s ease-out infinite;

  @keyframes rolling {
    from {
      stroke-dasharray: 15;
      stroke-dashoffset: 0;
    }
    to {
      stroke-dasharray: 25;
      stroke-dashoffset: -42;
    }
  }
`;
