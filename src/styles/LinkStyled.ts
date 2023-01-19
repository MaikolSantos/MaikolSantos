import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyled = styled(Link)`
  font-size: 1rem;
  color: var(--color-brand-100);
  font-weight: var(--weight-bold);

  ::after {
      content: '';
      height: 0.0625rem;
      width: 100%;
      background: transparent;
      display: block;
    }

  :hover {
    ::after {
      background: var(--color-brand-100);
      animation: underline 1s linear infinite alternate-reverse;
    }

    @keyframes underline {
      to {
        width: 0;
      }
    }
  }
`