import styled from 'styled-components';

export const Label = styled.label`
  display: inline-block;
  position: relative;
  overflow: hidden;
`;

export const Checkbox = styled.input`
  position: absolute;
  left: -100px;
  top: -100px;
  height: 0;
  width: 0;
  visibility: hidden;
`;

export const Toggler = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 48px;
  height: 24px;
  background: #c8c8c8;
  border-radius: 48px;
  position: relative;
  transition: background-color .2s;

  ${Checkbox}:checked + & {
    background-color: #34A835;
  }
`;

export const Button = styled.span`
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: .2s;
  background: #fff;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);

  ${Toggler}:active > & {
    width: 26px;
  }

  ${Checkbox}:checked + ${Toggler} > & {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`;
