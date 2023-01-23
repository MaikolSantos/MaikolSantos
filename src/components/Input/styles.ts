import styled from "styled-components";

export const Container = styled.fieldset`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border: none;

  > input {
    height: 2.25rem;
    padding: 0 1rem;
    border-radius: 3.125rem;
    border: 0.0625rem solid transparent;
    outline: transparent;
    background-color: var(--color-black-300);
    color: var(--color-grey-400);

    :focus {
      background-color: var(--color-black-100);
      border-color: var(--color-brand-100);
    }
  }
`;
