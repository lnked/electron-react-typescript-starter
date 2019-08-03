import styled from 'styled-components';

const size = '18px';

export const Label = styled.label`
  min-width: ${size};
  min-height: ${size};
  padding-left: ${size};
  position: relative;
  font-size: 0;
  display: inline-block;
  vertical-align: middle;

  & + & {
    margin-left: 10px;
  }
`;

export const Field = styled.input`
  position: absolute;
  left: -1000px;
  top: -1000px;
`;

export const Checker = styled.span`
  position: absolute;
  left: 0;
  top: 1px;
  width: ${size};
  height: ${size};

  color: rgb(64, 64, 64);
  border-radius: 50%;
  border: none;
  position: absolute;
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: linear-gradient(#fdfdfd, #ededed);
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.15);

  &:after {
    content: '';
    width: 8px;
    height: 8px;
    display: none;
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 1;
    border-radius: 50%;
    pointer-events: none;
    background-color: rgb(64, 64, 64);
    margin-left: -4px;
    margin-top: -4px;
  }

  ${Label}:hover > & {
    background-image: linear-gradient(-180deg, #f2f2f2 0, #dfdfdf 100%);
  }

  ${Field}:checked + &:after {
    display: block;
  }
`;

export const Text = styled.span`
  font-size: 1.4rem;
  line-height: ${size};
  padding-left: 5px;
  display: inline-block;
  vertical-align: middle;
`;
