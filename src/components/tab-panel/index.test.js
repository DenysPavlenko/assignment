/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import TabPanel from './index';
import { checkProps } from 'test-utils/index';

const defaultProps = {
  children: <span></span>,
  className: 'test',
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<TabPanel {...setupProps} />);
};

describe('TabPanel component', () => {
  test('renders without error', () => {
    let wrapper = setup();
    const component = wrapper.find('.tab-panel');
    expect(component.length).toBe(1);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...defaultProps, onClick: () => { } };
    const propsError = checkProps(TabPanel, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
