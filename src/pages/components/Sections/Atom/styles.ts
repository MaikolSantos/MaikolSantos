import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 0 1rem;
  
  @media (min-width: 600px) {
    padding: 5rem 1rem;
  }

  svg:nth-child(1) {
    width: 100%;
    width: 100%;
    height: auto;
    top: 50%;
    transform: translateY(-50%);
  }

  svg + svg {
    bottom: -1rem;
  }
`;
