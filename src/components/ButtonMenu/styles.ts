import styled, { css } from "styled-components";

import { ButtonMenuStyledProps } from "./types";

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 0.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 1.875rem;
  height: 1.875rem;
  position: relative;
  z-index: 2;

  ::before {
    content: "";
    display: block;
    width: 1.875rem;
    height: 0.125rem;
    border-radius: 0.625rem;
    background-color: var(--color-grey-300);
    transition: 0.2s ease;
  }

  ::after {
    content: "";
    display: block;
    width: 1.25rem;
    height: 0.125rem;
    border-radius: 0.625rem;
    background-color: var(--color-grey-300);
    transition: 0.5s ease;
  }

  :hover {
    ::before,
    ::after {
      background-color: var(--color-white);
    }
  }

  ${({ open }: ButtonMenuStyledProps) => {
    return (
      open &&
      css`
        ::before {
          transform: translateY(0.25rem) rotate(225deg);
        }

        ::after {
          width: 1.875rem;
          transform: translateY(-0.375rem) rotate(-225deg);
        }
      `
    );
  }}
`;
