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
    const { results } = await this.getResource('?results=100&inc=id,name,picture,email,phone,location&nat=us&seed=abc');
    const list = {};
    results.sort((a, b) => a.name.last.localeCompare(b.name.last));
    results.forEach(item => {
      const letter = item.name.last[0].toLowerCase();
      if (!list[letter]) {
        list[letter] = [];
      }
      list[letter].push(item);
    });
    return list;
  }
}
