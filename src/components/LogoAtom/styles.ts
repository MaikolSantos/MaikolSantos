import styled from "styled-components";

export const Container = styled.svg`
  width: 100%;
  max-width: 40rem;
`;

export const LineAtom = styled.path`
  stroke-dasharray: 0;
  stroke-dashoffset: 0;
  animation: lineAtom 3s linear infinite;

  @keyframes lineAtom {
    from {
      stroke-dasharray: 790;
      stroke-dashoffset: 0;
    }
    to {
      stroke-dasharray: 790;
      stroke-dashoffset: 1600;
    }
  }
`;

export const LineAtomTwo = styled(LineAtom)`
  animation-delay: 1.5s;
`;

export const LineAtomThree = styled(LineAtom)`
  animation-delay: 2.5s;
`;

export const LineAtomFour = styled(LineAtom)`
  animation-delay: 3.5s;
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
