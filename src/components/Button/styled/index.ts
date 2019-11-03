import styled from 'styled-components';

import { colors } from './colors';
import { OuterProps } from '../types';

export const Button = styled.button`
  font-size: 1.4rem;
  line-height: 1;
  outline: none;
  padding: 7px 15px;
  border-radius: 3px;
  display: inline-block;
  position: relative;
  text-decoration: none !important;
  cursor: pointer;
  text-align: center;
  zoom: 1;
  overflow: visible;
  user-select: none;
  transition: background-color .2s;

  border: 1px solid;

  color: ${(props: OuterProps) =>
    (props.success && colors.success.base.color) ||
    (props.primary && colors.primary.base.color) ||
    (props.warning && colors.warning.base.color) ||
    (props.danger && colors.danger.base.color) ||
    (colors.default.base.color)
  };

  border-color: ${(props: OuterProps) =>
    (props.success && colors.success.base.borderColor) ||
    (props.primary && colors.primary.base.borderColor) ||
    (props.warning && colors.warning.base.borderColor) ||
    (props.danger && colors.danger.base.borderColor) ||
    (colors.default.base.borderColor)
  };

  background-color: ${(props: OuterProps) =>
    (props.success && colors.success.base.backgroundColor) ||
    (props.primary && colors.primary.base.backgroundColor) ||
    (props.warning && colors.warning.base.backgroundColor) ||
    (props.danger && colors.danger.base.backgroundColor) ||
    (colors.default.base.backgroundColor)
  };

  &:hover {
    border-color: ${(props: OuterProps) =>
      (props.success && colors.success.hover.borderColor) ||
      (props.primary && colors.primary.hover.borderColor) ||
      (props.warning && colors.warning.hover.borderColor) ||
      (props.danger && colors.danger.hover.borderColor) ||
      (colors.default.hover.borderColor)
    };

    background-color: ${(props: OuterProps) =>
      (props.success && colors.success.hover.backgroundColor) ||
      (props.primary && colors.primary.hover.backgroundColor) ||
      (props.warning && colors.warning.hover.backgroundColor) ||
      (props.danger && colors.danger.hover.backgroundColor) ||
      (colors.default.hover.backgroundColor)
    };
  }

  &:focus {
    position: relative;
    z-index: 1;
    box-shadow: 0 0 0 1px #e48a1beb, 0 0 0 3px #ffbc00;

    &:active {
      box-shadow: none;
    }
  }
`;
