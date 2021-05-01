/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Tab from './index';
import { checkProps } from 'test-utils/index';

const defaultProps = {
  label: 'a',
  number: 1,
  onClick: () => { },
  isActive: false,
  className: 'test',
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Tab {...setupProps} />);
};

describe('Tab component', () => {
  test('renders without error', () => {
    let wrapper = setup();
    const component = wrapper.find('.tab');
    expect(component.length).toBe(1);
  });
  test('has is-active class with isActive:true prop', () => {
    let wrapper = setup({ isActive: true });
    const component = wrapper.find('.is-active');
    expect(component.length).toBe(1);
  });
  test('has is-disabled class if number equals to 0', () => {
    let wrapper = setup({ number: 0 });
    const component = wrapper.find('.is-disabled');
    expect(component.length).toBe(1);
  });
  test('handleClick and on click', () => {
    const mockFunc = jest.fn();
    let wrapper = setup({ onClick: mockFunc });
    const component = wrapper.find('.tab');
    component.simulate('click', { currentTarget: { blur: () => { } } });
    expect(mockFunc.mock.calls.length).toBe(1);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...defaultProps, onClick: () => { } };
    const propsError = checkProps(Tab, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
