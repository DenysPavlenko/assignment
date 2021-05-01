/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import ToggleTheme from './index';
import { ThemeProvider } from 'context/theme-context';

const setup = ({ dark }) => {
  dark = dark || false;
  return mount(
    <ThemeProvider value={{ dark, toggleTheme: () => { } }}>
      <ToggleTheme />
    </ThemeProvider>
  );
};

describe('ToggleTheme component', () => {
  test('renders without error', () => {
    let wrapper = setup({});
    const component = wrapper.find('.switch');
    expect(component.length).toBe(1);
  });
  test('renders Sun icon if dark is false', () => {
    let wrapper = setup({ dark: false });
    const component = wrapper.find('#sunIcon').first();
    expect(component.length).toBe(1);
  });
  test('renders Moon icon if dark is true', () => {
    let wrapper = setup({ dark: true });
    const component = wrapper.find('#moonIcon').first();
    expect(component.length).toBe(1);
  });
});
