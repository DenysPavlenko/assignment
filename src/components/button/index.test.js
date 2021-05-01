/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';
import { checkProps } from 'test-utils/index';

const defaultProps = {
  children: <span></span>,
  className: 'test',
  variant: 'primary',
  href: undefined,
  disabled: false,
  onClick: () => { },
  type: 'button',
  style: { color: 'red' },
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Button {...setupProps} />);
};

describe('Button component', () => {
  test('renders without error', () => {
    let wrapper = setup();
    const component = wrapper.find('.button');
    expect(component.length).toBe(1);
  });
  test('should render <a></a> tag with href prop', () => {
    let wrapper = setup({ href: 'https://example.com' });
    const component = wrapper.find('.button');
    expect(component.first().type()).toEqual('a');
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...defaultProps };
    const propsError = checkProps(Button, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
