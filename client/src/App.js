import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Router } from '@reach/router';
import { theme } from '~/src/shared';
import { Layout } from '~src/components';
import { Home, Game } from '~/src/views';
import { rgbStr } from '~/src/libs/color';

const GlobalStyles = createGlobalStyle`
  html, body {
    background: ${({ theme }) => rgbStr(theme.color.grayscale.black)};
    color: ${({ theme }) => rgbStr(theme.color.grayscale.white)}
  }
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyles />
      <Router>
        <Home path="/" />
        <Game path="/game" />
      </Router>
    </Layout>
  </ThemeProvider>
);

export default App;
