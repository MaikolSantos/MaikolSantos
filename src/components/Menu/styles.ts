import styled from "styled-components";

export const Container = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  width: 100%;
  max-width: 22.5rem;
  border-radius: 0.5rem;
  background: var(--color-black-200);
  animation: menu 0.5s ease forwards;

  ul {
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    li {
      display: flex;
      align-items: center;
    }
    a {
      display: flex;
      align-items: center;
      align-self: stretch;
      cursor: pointer;
      transition: 0.3s ease;
      font-weight: 500;
      font-size: 1rem;

      img {
        opacity: 0;
        transition: 0.3s ease;

        animation: planet 5s linear infinite;
      }

      :hover {
        color: var(--color-brand-100);

        img {
          opacity: 1;
        }
      }
    }
  }

  @keyframes menu {
    from {
      transform: translateX(12.5rem);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes planet {
    to {
      transform: rotate(360deg);
    }
  }
`;
