import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  border-radius: 0.5rem;
  background-color: var(--color-black-200);

  > svg {
    cursor: pointer;
    transition: 0.3s ease;

    :hover {
      fill: var(--color-brand-100);
    }
  }
`;
