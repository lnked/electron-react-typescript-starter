import styled from 'styled-components';

export const Layout = styled.div`
  padding: 15px;
`;

export const Box = styled.div`
  clear: both;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
