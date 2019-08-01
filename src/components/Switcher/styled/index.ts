import styled from 'styled-components';

export const Spinner = styled.div`
  @keyframes loader {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }

  &,
  &:before,
  &:after {
    width: 2.5em;
    height: 2.5em;
    border-radius: 50%;
    animation-fill-mode: both;
    animation: loader 1.2s infinite ease-in-out;
  }

  & {
    color: #111;
    margin: 0 auto;
    font-size: 8px;
    position: relative;
    text-indent: -9999em;
    transform: translateZ(0);
    animation-delay: -0.16s;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
  }

  &:before {
    left: -3.5em;
    animation-delay: -0.32s;
  }

  &:after {
    left: 3.5em;
  }
`;
