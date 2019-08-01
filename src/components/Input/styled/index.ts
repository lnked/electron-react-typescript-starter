import styled from 'styled-components';

export const Label = styled.label`

  &:before,
  &:after {
    content: '';
    height: 100%;
    min-width: 10px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
  }

  &:before {
    padding-left: 10px;
  }

  &:after {
    margin: 0 0 0 auto;
    justify-self: flex-end;
    padding-right: 10px;
  }
`;

export const Wrapper = styled.span`
  /* position: relative;
  display: flex;
  align-items: center;
  margin: 0;
  width: 100%;
  min-width: 0;
  white-space: nowrap;
  text-overflow: clip;
  overflow: hidden; */
`;

export const Title = styled.span`
  display: block;
  font-size: 1.4rem;
  margin-bottom: 5px;
`;

export const Field = styled.input`
  /* font: inherit;
  margin: 0;
  padding: 0;
  outline: none;
  width: 100%;
  appearance: none;
  text-overflow: clip;
  background: transparent;
  border: 0 none;
  line-height: inherit;
  white-space: nowrap; */

  padding: 6px 10px;
  background-color: #fff;
  box-shadow: inset 0 1px 0 0 rgba(0,0,0,0.05);
  border: 1px solid rgba(0,0,0,0.15);
  border-top-color: rgba(0,0,0,0.28);
  font-size: 14px;
  line-height: 20px;
  height: 34px;

  text-align: initial;
  text-transform: none;
  text-shadow: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  width: 250px;
  background-clip: padding-box;
  transition: background-color 0.15s ease-in;
  outline: none;
  cursor: text;

  &:focus {
    border-color: #5199db;
    box-shadow: 0 0 0 1px #5199db;
  }
`;
