import styled from "styled-components";

export const ContainerDefault = styled.section`
  max-width: 60rem;
  width: 100%;
  margin: 0 auto;
`;

export const ContainerSections = styled(ContainerDefault)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 3.75rem 1rem;

  @media (min-width: 600px) {
    gap: 5rem;
  }
`;
