import styled from "styled-components";

export const Container = styled.li`
  border-radius: 0.5rem;
  background-color: var(--color-black-300);
  padding: 0.0625rem;
  position: relative;
  overflow: hidden;
  transition: 0.3s ease;
  width: 100%;
  max-width: 18.75rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;
    border-radius: 0.5rem;
    background-color: var(--color-black-300);
    position: relative;
    z-index: 1;
    padding: 1.5rem 1rem;
    transition: 0.3s ease;

    h3 {
      font-size: 1.125rem;
    }

    p {
      font-size: 1rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      max-height: 3rem;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }

  :hover {
    background-color: var(--color-black-100);

    div {
      background-color: var(--color-black-200);
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
      background: linear-gradient(
        0deg,
        #0a6abf 0%,
        rgba(217, 217, 217, 0) 100%
      );
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
  }
`;

export const ButtonGroup = styled.footer`
  margin-top: 0.3125rem;
  display: flex;
  gap: 0.5rem;
`;
