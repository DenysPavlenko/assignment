/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import TabPanels from './index';
import { checkProps } from 'test-utils/index';

const defaultProps = {
  children: <span></span>,
  activePanel: 'a',
  className: 'test',
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<TabPanels {...setupProps} />);
};

describe('TabPanels component', () => {
  test('renders without error', () => {
    const wrapper = setup();
    const component = wrapper.find('.tab-panels');
    expect(component.length).toBe(1);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...defaultProps };
    const propsError = checkProps(TabPanels, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
