import React from 'react';
import styled from 'styled-components';
import { rgbStr } from '~/src/libs/color';

const ButtonStyles = styled.button`
  padding: 1.2rem;
  width: 16rem;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 3px;
  background: ${({ theme }) => rgbStr(theme.color.grayscale.white)};
  border: none;
  border-radius: 0.4rem;
  outline: none;
`;

const Button = props => {
  return <ButtonStyles {...props}>{props.children}</ButtonStyles>;
};

export default Button;
