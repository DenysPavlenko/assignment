/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import useTabClick from './use-tab-click';

// eslint-disable-next-line react/display-name
const FunctionalComponent = ({ handler }) => {
  const ref = React.useRef(null);
  useTabClick(ref, handler);
  return <div ref={ref} />;
};

const setup = (props = {}) => {
  return mount(<FunctionalComponent {...props} />);
};

describe('useTabClick', () => {
  it('should call handler if keyCode equals to 9', () => {
    const map = {};
    const props = {
      handler: jest.fn(),
    };
    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    setup(props);
    map.keydown({ keyCode: 9 });
    expect(props.handler).toHaveBeenCalled();
  });
  it('should call handler if which equals to 9', () => {
    const map = {};
    const props = {
      handler: jest.fn(),
    };
    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    setup(props);
    map.keydown({ which: 9 });
    expect(props.handler).toHaveBeenCalled();
  });
});
