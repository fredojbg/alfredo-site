import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';

import Header from './components/Header';

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme ? JSON.parse(savedTheme) : { mode: 'light' };
};

const App = () => {
  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <div className='darkModeButton'>
          <button
            onClick={e =>
              setTheme(
                theme.mode === 'dark' ? { mode: 'light' } : { mode: 'dark' },
              )
            }>
            DarkMode
          </button>
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;
