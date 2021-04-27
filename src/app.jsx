import React from 'react';
// Components
import ToggleTheme from 'components/toggle-theme';
import ContactsList from 'components/contact-list';
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
          <ContactsList />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default App;
