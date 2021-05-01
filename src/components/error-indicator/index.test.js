/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import ErrorIndicator from './index';
import { checkProps } from 'test-utils/index';

const defaultProps = {
  className: 'test',
  retry: null,
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<ErrorIndicator {...setupProps} />);
};

describe('ErrorIndicator component', () => {
  test('renders without error', () => {
    let wrapper = setup();
    const component = wrapper.find('.error-indicator');
    expect(component.length).toBe(1);
  });
  test('should render retry button with "retry" prop', () => {
    let wrapper = setup({ retry: () => { } });
    const component = wrapper.find('.error-indicator__button');
    expect(component.length).toBe(1);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...defaultProps, retry: () => { } };
    const propsError = checkProps(ErrorIndicator, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
