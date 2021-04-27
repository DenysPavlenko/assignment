import React from 'react';
// Components
import ToggleTheme from 'components/toggle-theme';
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
      </ThemeProvider>
    </div>
  );
};

export default App;
