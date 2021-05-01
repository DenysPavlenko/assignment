/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import ListGroup from './index';
import { checkProps } from 'test-utils/index';

const defaultProps = {
  children: ['<div className="list-group__col"></div>'],
  className: 'test',
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<ListGroup {...setupProps} />);
};

describe('ListGroup component', () => {
  test('renders without error', () => {
    const wrapper = setup();
    const component = wrapper.find('.list-group');
    expect(component.length).toBe(1);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...defaultProps };
    const propsError = checkProps(ListGroup, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
