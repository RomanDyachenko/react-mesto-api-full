import { authBaseUrl } from "./utils";

class Auth {
    constructor(authBaseUrl){
        this._authBaseUrl = authBaseUrl;
    }
        
    _returnResult = (res) => {
        if (res.ok) {
          return res.json();
        }
    
        return Promise.reject("Something gone wrong");
      };
    

    postNewUser = (password, email) => {
        return fetch(`${this._authBaseUrl}signup`,
        {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(
                {
                "password": `${password}`,
                "email": `${email}`
            }
            )
        }
        )
        .then((res) => {
            return this._returnResult(res);
          });
    }

    avtorizationUser = (password, email) => {
        return fetch(`${this._authBaseUrl}signin`,
        {
            method: "POST",
            headers: {"Content-Type": "application/json"},
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
        return fetch (`${this._authBaseUrl}users/me`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                authorization: jwt
            }
        }
        )
        .then((res) => {
            return this._returnResult(res);
          });
    }
}

const newAuth = new Auth(authBaseUrl);

export default newAuth;