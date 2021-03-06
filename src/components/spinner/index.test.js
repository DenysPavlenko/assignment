/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './index';
import { checkProps } from 'test-utils/index';

const defaultProps = {
  boxed: false,
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Spinner {...setupProps} />);
};

describe('Spinner component', () => {
  test('renders without error', () => {
    const wrapper = setup();
    const component = wrapper.find('.spinner');
    expect(component.length).toBe(1);
  });
  test('wraps spinner into box with boxed:true prop', () => {
    const wrapper = setup({ boxed: true });
    const component = wrapper.find('.spinner-box');
    expect(component.length).toBe(1);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...defaultProps };
    const propsError = checkProps(Spinner, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
