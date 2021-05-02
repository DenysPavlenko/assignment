/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import useClickOutside from './use-click-outside';

// eslint-disable-next-line react/display-name
const FunctionalComponent = ({ handler }) => {
  const ref = React.useRef(null);
  useClickOutside(ref, handler);
  return <div ref={ref} />;
};

const setup = (props = {}) => {
  return mount(<FunctionalComponent {...props} />);
};

describe('useClickOutside', () => {
  it('should not call handler if ref.current is null', () => {
    const map = {};
    const props = {
      handler: jest.fn(),
    };
    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    const wrapper = setup(props);
    map.click({ target: wrapper.getDOMNode() });
    expect(props.handler).not.toHaveBeenCalled();
  });
  it('should call handler if ref.current doesn`t contain e.target', () => {
    const map = {};
    const props = {
      handler: jest.fn(),
    };
    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    setup(props);
    map.click({ target: null });
    expect(props.handler).toHaveBeenCalled();
  });
});
