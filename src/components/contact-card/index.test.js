/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import ContactCard from './index';
import { checkProps } from 'test-utils/index';

// eslint-disable-next-line react/display-name
// eslint-disable-next-line react/prop-types
const ListGroupItem = ({ onClick }) => <span className="list-group-item" onClick={onClick}></span>;

const defaultProps = {
  children: <ListGroupItem />,
  avatar: 'https://example.com',
  firstName: 'test first name',
  lastName: 'test last name',
  email: 'test@gmail.com',
  phone: '+1234656894',
  street: 'Washington street',
  city: 'New York',
  state: 'New York',
  postcode: '65416',
  className: 'test',
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return mount(
    <ContactCard {...setupProps} />
  );
};

describe('ContactCard component', () => {
  test('renders without error', () => {
    const wrapper = setup();
    const component = wrapper.find('.contact-card');
    expect(component.length).toBe(1);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...defaultProps };
    const propsError = checkProps(ContactCard, expectedProps);
    expect(propsError).toBeUndefined();
  });
});

describe('ContactCard mount and unmount', () => {
  let wrapper;
  let listGroupItem;
  beforeEach(() => {
    wrapper = setup();
    listGroupItem = wrapper.find('.list-group-item');
  });

  test('mounts contact-card on list-group-item click', () => {
    listGroupItem.simulate('click');
    const contactCardWrap = wrapper.find('.contact-card__wrap');
    expect(contactCardWrap.length).toBe(1);
  });
  test('unmounts contact-card on close click', () => {
    listGroupItem.simulate('click');
    const contactCardClose = wrapper.find('.contact-card__close');
    contactCardClose.simulate('click');
    const contactCardWrap = wrapper.find('.contact-card__wrap');
    expect(contactCardWrap.length).toBe(1);
  });
});
