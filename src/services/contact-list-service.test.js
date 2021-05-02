/* eslint-disable no-undef */
import ContactListService from './contact-list-service';
const contactListService = new ContactListService();

const dummyData = {
  results: [{
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
  }],
  info: {}
};

const list = {
  a: [{
    name: {
      first: 'Harvey',
      last: 'Adams',
    },
    location: {
      city: 'Cardiff',
      country: 'United Kingdom',
      postcode: 'HG0 2FT',
      state: 'Grampian',
      street: {
        'name': 'Mill Road',
      },
    },
    email: 'harvey.adams@example.com',
    phone: '01091 717358',
    id: { value: 'NE 63 61 45 A' },
    picture: { large: 'https://randomuser.me/api/portraits/men/50.jpg' }
  }]
};

describe('ContactListService getResource', () => {
  it('should throw an error if ok is not true', async () => {
    const mockFetchPromise = Promise.resolve({
      ok: false,
      status: 404,
    });
    jest.spyOn(global, 'fetch').mockImplementationOnce(() => mockFetchPromise);
    await expect(contactListService.getResource())
      .rejects
      .toThrow('Could not fetch https://randomuser.me/api/, received 404');
  });
  it('should fetch data', async () => {
    const mockFetchPromise = Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve(dummyData),
    });
    jest.spyOn(global, 'fetch').mockImplementationOnce(() => mockFetchPromise);
    const res = await contactListService.getResource();
    expect(res).toBe(dummyData);
  });
});

describe('ContactListService getContacts', () => {
  it('should retrieve data with getResource helper', async () => {
    const mockFetchPromise = Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve(dummyData),
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
    await contactListService.getResource();
    const result = await contactListService.getContacts();
    expect(result).toMatchObject(list);
  });
});
