import styled from "styled-components";

import { ContainerSections } from "../../../../styles/Containers";

export const Container = styled(ContainerSections)`
  ul {
    margin: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    gap: 1.5rem 1rem;
    
    @media (min-width: 600px) {
      gap: 1.5rem 2rem;
      
    }

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;
      width: max-content;
      transition: 0.3s ease-in-out;

      small {
        opacity: 0;
        color: var(--color-grey-400);
        transition: 0.3s ease-in-out;
      }

      svg {
        transition: 0.3s ease-in-out;
        font-size: 2.5rem;

        @media (min-width: 600px) {
          font-size: 4rem;
        }
      }

      :hover {
        transform: translateY(-0.3125rem);

        small {
          opacity: 1;
        }

        svg {
          fill: var(--color-grey-400);
          filter: drop-shadow(0rem 0.3125rem 0.5rem #2182d9);
        }
      }
    }
  }
`;
