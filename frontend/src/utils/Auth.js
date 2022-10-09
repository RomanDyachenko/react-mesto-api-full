import { authBaseUrl, authHeaders } from "./utils";

class Auth {
    constructor(authBaseUrl, authHeaders){
        this._authBaseUrl = authBaseUrl;
        this._authHeaders = authHeaders;
    }
        
    _returnResult = (res) => {
        if (res.ok) {
          return res.json();
        }
    
        return Promise.reject("Something gone wrong");
      };
    

    postNewUser = (password, email) => {
        return fetch(`${this._authBaseUrl}/signup`,
        {
            method: "POST",
            headers: this._authHeaders,
            body: JSON.stringify(
                {
                "email": `${email}`,
                "password": `${password}`
            }
            )
        }
        )
        .then((res) => {
            return this._returnResult(res);
          });
    }

    avtorizationUser = (password, email) => {
        return fetch(`${this._authBaseUrl}/signin`,
        {
            method: "POST",
            headers: this._authHeaders,
            body: JSON.stringify(
                {
                    "password": password,
                    "email": email
                }
            )
        }
        )
        .then((res) => {
           return this._returnResult(res);
          });
    }

    getUserInfo = (jwt) => {
        return fetch (`${this._authBaseUrl}/users/me`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }
        )
        .then((res) => {
            return this._returnResult(res);
          });
    }
}

const newAuth = new Auth(authBaseUrl, authHeaders);

export default newAuth;