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
  gap: 1.5rem;
  padding: 3.75rem 0;
`;
