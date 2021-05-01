/* eslint-disable no-undef */
import React from 'react';
import { mount, shallow } from 'enzyme';
import { ContactList } from './index';
import { checkProps } from 'test-utils/index';

const defaultProps = {
  fetchContactListRequest: () => { },
  contactList: {
    loading: false,
    data: {
      a: [{
        'name': {
          'first': 'Harvey',
          'last': 'Adams'
        },
        'location': {
          'street': {
            'name': 'Mill Road'
          },
          'city': 'Cardiff',
          'state': 'Grampian',
          'country': 'United Kingdom',
          'postcode': 'HG0 2FT',
        },
        'email': 'harvey.adams@example.com',
        'phone': '01091 717358',
        'id': {
          'value': 'NE 63 61 45 A'
        },
        'picture': {
          'large': 'https://randomuser.me/api/portraits/men/50.jpg',
        }
      }]
    },
    error: null,
  }
};

const setupMount = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return mount(<ContactList {...setupProps} />);
};
const setupShallow = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<ContactList {...setupProps} />);
};

describe('ContactList component', () => {
  test('renders without error', () => {
    const wrapper = setupMount();
    const component = wrapper.find('.contact-list');
    expect(component.length).toBe(1);
  });
  test('renders error indicator', () => {
    const wrapper = setupShallow({ contactList: { error: 'error message' } });
    const component = wrapper.find('ErrorIndicator');
    expect(component.length).toBe(1);
  });
  test('renders loading indicator', () => {
    const wrapper = setupShallow({ contactList: { loading: true } });
    const component = wrapper.find('Spinner');
    expect(component.length).toBe(1);
  });
  test('renders tab-panel', () => {
    const wrapper = setupShallow();
    const component = wrapper.find('TabPanels');
    expect(component.length).toBe(1);
  });
  test('switches active letter on tabs click', () => {
    const wrapper = shallow(<ContactList {...defaultProps} />);
    const tabs = wrapper.find('Tabs');
    tabs.simulate('click', 'a');
    const tabPanels = wrapper.find('TabPanels');
    expect(tabPanels.length).toBe(1);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...defaultProps, contactList: { loading: false, data: {}, error: 'error message' } };
    const propsError = checkProps(ContactList, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
