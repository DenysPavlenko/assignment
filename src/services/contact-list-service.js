export default class ContactListService {
  _apiBase = 'https://randomuser.me/api/';

  getResource = async params => {
    const res = await fetch(`${this._apiBase}${params}`);
    /* istanbul ignore else */
    if (!res.ok) {
      throw new Error(`Could not fetch ${this._apiBase}, received ${res.status}`);
    }
    const body = await res.json();
    return body;
  }

  getContacts = async () => {
    const { results } = await this.getResource('?results=120&inc=id,name,picture,email,phone,location&nat=au,us,gb&seed=abc');
    const list = {};
    results.sort((a, b) => a.name.last.localeCompare(b.name.last));
    results.forEach(item => {
      const letter = item.name.last[0].toLowerCase();
      /* istanbul ignore else */
      if (!list[letter]) {
        list[letter] = [];
      }
      list[letter].push(item);
    });
    return list;
  }
}
