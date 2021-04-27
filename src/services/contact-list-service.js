export default class ContactListService {
  _apiBase = 'https://randomuser.me/api/';

  async getResource(params) {
    const res = await fetch(`${this._apiBase}${params}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${this._apiBase}, received ${res.status}`);
    }
    const body = await res.json();
    return body;
  }

  getContacts = async () => {
    const { results } = await this.getResource('?results=10&inc=name,picture,email,phone,location&nat=us&seed=abc');
    return results;
  }
}
