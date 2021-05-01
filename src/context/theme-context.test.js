/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { ThemeProvider, useTheme } from './theme-context';

const FunctionalComponent = () => {
  useTheme();
  return <div />;
};

test('themeContext throws error when not wrapped in ThemeProvider', () => {
  expect(() => {
    shallow(<FunctionalComponent />);
  })
    .toThrow('useTheme must be used within ThemeProvider');
});
test('themeContext does not throws error when not wrapped in GuessedWordsContext', () => {
  expect(() => {
    mount(
      <ThemeProvider>
        <FunctionalComponent />
      </ThemeProvider>
    );
  })
    .not.toThrow('useTheme must be used within ThemeProvider');
});
