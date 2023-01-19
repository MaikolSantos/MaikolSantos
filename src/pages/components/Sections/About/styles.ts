import styled from 'styled-components';
import { ContainerDefault } from '../../../../styles/Containers';

export const Container = styled(ContainerDefault)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 3.75rem 0;

  > svg {
    width: 100%;
  }

  > a {
    margin-top: 1rem;
  }
`