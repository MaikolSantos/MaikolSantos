import styled from "styled-components";

export const Planet = styled.g`
  animation: planetSetup 3s ease-in-out infinite alternate;

  @keyframes planetSetup {
    from {
      transform: translateY(-0.625rem);
    }
    to {
      transform: translateY(0.5rem);
    }
  }
`;

export const PlanetPurple = styled(Planet)`
  animation-delay: 2s;
`;

export const PlanetPink = styled(Planet)`
  animation-delay: 0.5s;
`;

export const Chair = styled.g`
  animation: chair 4s ease-in-out infinite alternate;

  @keyframes chair {
    from {
      transform: translateY(-0.625rem);
    }
    to {
      transform: translateY(0);
    }
  }
`;

export const Rock = styled.g`
  animation: rock 5s ease-in-out infinite alternate;

  @keyframes rock {
    from {
      transform: rotate(-1deg);
    }
    to {
      transform: rotate(0);
    }
  }
`;
