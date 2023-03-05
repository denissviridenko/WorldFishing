export default class Api {
  constructor(jwt) {
    this._baseUrl = 'http://localhost:3000/';
    this._headers = {
      authorization: `Bearer ${jwt}`,
      'Content-Type': 'application/json',
    };
  }

  _handleResponse(res) {
    if (res.ok) { return res.json(); }
    throw new Error('Произошла ошибка!');
  }

  getToursInfo() {
    return fetch(`${this._baseUrl}tours`, {
      headers: this._headers,
    })
      .then((res) => this._handleResponse(res));
  }

  getBookingsInfo() {
    return fetch(`${this._baseUrl}bookings`, {
      headers: this._headers,
    })
      .then((res) => this._handleResponse(res));
  }

  getProfileInfo() {
    return fetch(`${this._baseUrl}users/me`, {
      headers: this._headers,
    })
      .then((res) => this._handleResponse(res));
  }

  changeProfileInfo(data) {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data),
    })
      .then((res) => this._handleResponse(res));
  }

  postBooking(data) {
    return fetch(`${this._baseUrl}bookings`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
    });
  }
}
