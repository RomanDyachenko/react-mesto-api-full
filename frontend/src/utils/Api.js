import { BaseUrl } from "./utils.js";

class Api {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  _returnResult = (res) => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject("Something gone wrong");
  };

  getCardsInfo = (url, token) => {
    return fetch(`${this._baseUrl}${url}`, {
      method: "GET",
      headers: {
        authorization: token
      },
    }).then((res) => {
      return this._returnResult(res);
    });
  };

  getUserInfo = (url, token) => {
    return fetch(`${this._baseUrl}${url}`, {
      method: "GET",
      headers: {
        authorization: token
      },
    }).then((res) => {
      return this._returnResult(res);
    });
  };

  patchNewInfo = (url, body, token) => {
    return fetch(`${this._baseUrl}${url}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: token
      },
      body: JSON.stringify(body),
    }).then((res) => {
      return this._returnResult(res);
    });
  };
  postNewCard = (url, body, token) => {
    return fetch(`${this._baseUrl}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token
      },
      body: JSON.stringify(body),
    }).then((res) => {
      return this._returnResult(res);
    });
  };

  deleteCard = (url, token) => {
    return fetch(`${this._baseUrl}${url}`, {
      method: "DELETE",
      headers: {
        authorization: token
      },
    }).then((res) => {
      return this._returnResult(res);
    });
  };

  changeLikeCardStatus = (url, isLiked, token) => {
    if (isLiked) {
      return this._deleteCardLike(url, token);
    } else {
      return this._putCardLike(url, token);
    }
  };

  _putCardLike = (url, token) => {
    return fetch(`${this._baseUrl}${url}`, {
      method: "PUT",
      headers: {
        authorization: token
      },
    }).then((res) => {
      return this._returnResult(res);
    });
  };

  _deleteCardLike = (url, token) => {
    return fetch(`${this._baseUrl}${url}`, {
      method: "DELETE",
      headers: {
        authorization: token
      },
    }).then((res) => {
      return this._returnResult(res);
    });
  };

  changeAvatar = (url, body, token) => {
    return fetch(`${this._baseUrl}${url}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: token
      },
      body: JSON.stringify(body),
    }).then((res) => {
      return this._returnResult(res);
    });
  };
}

const newApi = new Api(BaseUrl, Headers);

export default newApi;
