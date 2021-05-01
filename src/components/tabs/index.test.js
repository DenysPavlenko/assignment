/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import Tabs from './index';
import { checkProps } from 'test-utils/index';

// eslint-disable-next-line react/display-name
const Tab = React.forwardRef(({ onClick }, ref) => {
  return (
    <span onClick={onClick} ref={ref}></span>
  );
});

const defaultProps = {
  children: <Tab label="a" />,
  className: 'test',
  onClick: () => { },
  activeTab: 'a',
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return mount(
    <Tabs {...setupProps} />
  );
};

describe('Tabs component', () => {
  test('renders without error', () => {
    let wrapper = setup();
    const component = wrapper.find('.tabs');
    expect(component.length).toBe(1);
  });
  test('calls click handler on tabs__tab click', () => {
    const mockFunc = jest.fn();
    let wrapper = setup({ onClick: mockFunc });
    const component = wrapper.find('.tabs__tab');
    component.simulate('click');
    expect(mockFunc.mock.calls.length).toBe(1);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...defaultProps };
    const propsError = checkProps(Tabs, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
