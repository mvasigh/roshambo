import React from 'react';
import styled from 'styled-components';
import { rgbStr } from '~/src/libs/color';

const LayoutStyles = styled.div.attrs(props => ({
  background: rgbStr(props.theme.color.grayscale.black)
}))`
  max-height: 100vh;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  background: ${props => props.background};
`;

const Layout = ({ children }) => {
  return <LayoutStyles>{children}</LayoutStyles>;
};

export default Layout;
