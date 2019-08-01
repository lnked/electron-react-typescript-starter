import styled from 'styled-components';

export const List = styled.ol`
  margin: 0;
  padding: 0;
  font-size: 0;
  list-style-type: n;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ListItem = styled.li`
  margin: 0 2px;
  display: inline-block;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 32px;
  height: 32px;
  padding: 0;
  outline: 0;
  font-size: 1.4rem;
  text-align: center;
  border-radius: 2px;

  &.current {
    color: #fff;
    background-color: blue;
  }

  &:focus {
    box-shadow: 0 0 0 1px #e48a1beb, 0 0 0 3px #ffbc00;

    &:active,
    &.current {
      box-shadow: none;
    }
  }
`;
