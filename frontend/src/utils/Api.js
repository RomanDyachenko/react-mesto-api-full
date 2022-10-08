import { BaseUrl, Headers } from "./utils.js";

class Api {
  constructor(baseUrl, headers) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._authorization = this._headers.authorization;
  }

  _returnResult = (res) => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject("Something gone wrong");
  };

  getCardsInfo = (url) => {
    return fetch(`${this._baseUrl}${url}`, {
      method: "GET",
      headers: {
        authorization: this._authorization,
      },
    }).then((res) => {
      return this._returnResult(res);
    });
  };

  getUserInfo = (url) => {
    return fetch(`${this._baseUrl}${url}`, {
      method: "GET",
      headers: {
        authorization: this._authorization,
      },
    }).then((res) => {
      return this._returnResult(res);
    });
  };

  patchNewInfo = (url, body) => {
    return fetch(`${this._baseUrl}${url}`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(body),
    }).then((res) => {
      return this._returnResult(res);
    });
  };
  postNewCard = (url, body) => {
    return fetch(`${this._baseUrl}${url}`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(body),
    }).then((res) => {
      return this._returnResult(res);
    });
  };

  deleteCard = (url) => {
    return fetch(`${this._baseUrl}${url}`, {
      method: "DELETE",
      headers: {
        authorization: this._authorization,
      },
    }).then((res) => {
      return this._returnResult(res);
    });
  };

  changeLikeCardStatus = (url, isLiked) => {
    if (isLiked) {
      return this._deleteCardLike(url);
    } else {
      return this._putCardLike(url);
    }
  };

  _putCardLike = (url) => {
    return fetch(`${this._baseUrl}${url}`, {
      method: "PUT",
      headers: {
        authorization: this._authorization,
      },
    }).then((res) => {
      return this._returnResult(res);
    });
  };

  _deleteCardLike = (url) => {
    return fetch(`${this._baseUrl}${url}`, {
      method: "DELETE",
      headers: {
        authorization: this._authorization,
      },
    }).then((res) => {
      return this._returnResult(res);
    });
  };

  changeAvatar = (url, body) => {
    return fetch(`${this._baseUrl}${url}`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(body),
    }).then((res) => {
      return this._returnResult(res);
    });
  };
}

const newApi = new Api(BaseUrl, Headers);

export default newApi;
