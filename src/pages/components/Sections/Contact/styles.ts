import styled from "styled-components";
import { ContainerSections } from "../../../../styles/Containers";

export const Container = styled(ContainerSections)`
  ul {
    margin: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
    max-width: 40rem;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;
      width: max-content;
      transition: 0.3s ease-in-out;

      svg {
        transition: 0.3s ease-in-out;
      }

      :hover {
        transform: translateY(-0.3125rem);

        svg {
          fill: var(--color-grey-400);
          filter: drop-shadow(0rem 0.3125rem 0.5rem #2182d9);
        }
      }
    }
  }

  svg + a {
    color: var(--color-grey-300);
    font-size: 1.25rem;
  }
`;
