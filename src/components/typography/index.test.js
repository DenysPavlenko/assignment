/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Typography from './index';
import { checkProps } from 'test-utils/index';

const defaultProps = {
  children: <span></span>,
  component: 'p',
  variant: 'p',
  className: undefined,
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Typography {...setupProps} />);
};

describe('Typography component', () => {
  test('renders without error', () => {
    const wrapper = setup();
    const component = wrapper.find('p');
    expect(component.length).toBe(1);
  });
  test('does not add an empty class', () => {
    const wrapper = setup({ variant: undefined });
    const component = wrapper.find('p');
    expect(component.get(0).props.className).toBe(null);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...defaultProps, className: 'test' };
    const propsError = checkProps(Typography, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
