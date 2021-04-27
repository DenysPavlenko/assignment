import React from 'react';
// Components
import ToggleTheme from 'components/toggle-theme';
import Tabs from 'components/tabs';
// Context
import { ThemeProvider } from 'context/theme-context';
// Styles
import './app.sass';

const App = () => {
  return (
    <div className="app">
      <ThemeProvider>
        <div className="app__toggle-mode">
          <ToggleTheme />
        </div>
        <div className="app__body">
          <Tabs />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default App;
