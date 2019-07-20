import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
  -webkit-app-region: drag;
  cursor: move;
  padding: 15px 20px;
  background-color: #3333f3;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Hamburger = styled.button`
  width: 32px;
  border: 0;
  font-size: 0;
  outline: 0;
  padding: 0;
  line-height: 0;
  cursor: pointer;
  position: relative;

  &,
  &:before,
  &:after {
    height: 2px;
    margin-top: -1px;
    background-color: #fff;
  }

  &:before,
  &:after {
    content: '';
    width: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, 0, 0);
  }

  &:before {
    transform: translate3d(-50%, -9px, 0);
  }

  &:after {
    transform: translate3d(-50%, 9px, 0);
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const ListItem = styled.li`
  display: inline-block;
  vertical-align: middle;

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const Link = styled(NavLink)`
  color: #fff;
  font-size: 1.8rem;
  text-decoration: none;
  transition: color .15s ease-in-out;

  &:hover {
    color: #ddd;
  }

  &.active {
    color: #bbb;
  }

  & + & {
    margin-left: 8px;
  }
`;
