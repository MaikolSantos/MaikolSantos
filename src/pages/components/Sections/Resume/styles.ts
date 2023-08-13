import styled from "styled-components";

import { ContainerDefault } from "../../../../styles/Containers";

export const Container = styled.section`
  margin-top: 10rem;
  margin-bottom: 10rem;
  overflow: hidden;
  transition: 0.3s ease;
`;

export const ResumeHeader = styled.header`
  background-color: var(--color-black-300);
  padding: 0.0625rem;
  position: relative;
  overflow: hidden;
  transition: 0.3s ease;
  width: 100%;

  div {
    display: flex;
    justify-content: center;
    background-color: var(--color-black-200);
    position: relative;
    z-index: 1;
    padding: 0.5rem 1rem;
    transition: 0.3s ease;
    cursor: pointer;

    h2 {
      font-weight: var(--weight-bold);
    }
  }

  ::after,
  ::before {
    position: absolute;
    top: -50%;
    left: -50%;
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    background: linear-gradient(0deg, #0a6abf 0%, rgba(217, 217, 217, 0) 100%);
    animation: rotate 5s linear infinite;
    transform-origin: bottom right;
  }

  ::before {
    animation-delay: -2.5s;
  }

  @keyframes rotate {
    to {
      transform: rotate(-360deg);
    }
  }

  :hover {
    background-color: var(--color-brand-50);

    ::after,
    ::before {
      display: none;
    }

    div {
      background-color: var(--color-brand-50);
    }
  }
`;

export const ResumeWrapper = styled.section`
  background-color: var(--color-black-300);
  padding: 2rem 1rem;
  animation: resume 0.8s linear forwards;

  @keyframes resume {
    from {
      transform: translateY(-1000px);
    }
    to {
      transform: translateY(0);
    }
  }
`;

export const ResumeContent = styled(ContainerDefault)`
  display: flex;
  gap: 2rem;
  justify-content: space-between;

  > section {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    > div {
      > h3 {
        color: var(--color-brand-100);
        margin-bottom: 1rem;
      }

      li {
        margin-bottom: 1rem;
      }
    }
  }

  > img {
    display: none;

    @media (min-width: 960px) {
      display: block;
      border-radius: 0.5rem;
      width: 50%;
      max-width: 25rem;
    }
  }
`;
