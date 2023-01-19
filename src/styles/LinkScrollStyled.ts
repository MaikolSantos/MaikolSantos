import styled from "styled-components";

import { Link } from "react-scroll";

export const LinkScrollStyled = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.25rem;
  padding: 0 2rem;
  font-weight: var(--weight-medium);
  font-size: 0.875rem;
  text-transform: uppercase;
  border: 0.0625rem solid var(--color-brand-100);
  border-radius: 3.125rem;
  background-color: transparent;
  color: var(--color-brand-100);
  cursor: pointer;
  transition: 0.3s ease;

  :hover {
    background: #06559b;
    border: 0.0625rem solid #2182d9;
    border-radius: 3.125rem;
    filter: drop-shadow(0rem 0rem 0.75rem #197de5);
    color: var(--color-grey-400);
  }
`;
