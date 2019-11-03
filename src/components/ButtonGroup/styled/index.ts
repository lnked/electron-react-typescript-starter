import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  button {
    border-radius: 0;

    &:first-child {
      border-radius: 3px 0 0 3px;
    }

    &:last-child {
      border-radius: 0 3px 3px 0;
    }
  }
`;
