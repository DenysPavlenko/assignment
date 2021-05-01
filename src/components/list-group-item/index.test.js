/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import ListGroupItem from './index';
import { checkProps } from 'test-utils/index';

const defaultProps = {
  isActive: false,
  children: <span></span>,
  className: 'test',
  onClick: undefined
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<ListGroupItem {...setupProps} />);
};

describe('ListGroupItem component', () => {
  test('renders without error', () => {
    let wrapper = setup();
    const component = wrapper.find('.list-group-item');
    expect(component.length).toBe(1);
  });
  test('should set cursor:pointer if onClick exists', () => {
    let wrapper = setup({ onClick: () => { } });
    const component = wrapper.find('.list-group-item');
    expect(component.get(0).props.style.cursor).toBe('pointer');
  });
  test('should emit handleAccessibilityKeyPress on KeyPress event', () => {
    const mockFunc = jest.fn();
    let wrapper = setup({ onClick: mockFunc });
    const component = wrapper.find('.list-group-item');
    component.simulate('keypress', { key: 'Enter', preventDefault: () => { } });
    expect(mockFunc.mock.calls.length).toBe(1);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...defaultProps, onClick: () => { } };
    const propsError = checkProps(ListGroupItem, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
