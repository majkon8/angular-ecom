import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class WebRequestService {
  readonly ROOT_URL: string;

  constructor(private http: HttpClient) {
    let baseUrl: string;
    if (window.location.origin.includes("localhost")) {
      this.ROOT_URL = "http://localhost:3000";
    } else {
      this.ROOT_URL = "";
    }
  }

  get(uri: string, headers: any = ""): Observable<Object> {
    return this.http.get(`${this.ROOT_URL}/${uri}`, {
      headers,
      observe: "response",
    });
  }

  post(uri: string, payload: Object, headers: any = ""): Observable<Object> {
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload, {
      headers,
      observe: "response",
    });
  }

  patch(uri: string, payload: Object, headers: any = ""): Observable<Object> {
    return this.http.patch(`${this.ROOT_URL}/${uri}`, payload, {
      headers,
      observe: "response",
    });
  }

  delete(uri: string, headers: any = ""): Observable<Object> {
    return this.http.delete(`${this.ROOT_URL}/${uri}`, {
      headers,
      observe: "response",
    });
  }

  login(email: string, password: string): Observable<HttpResponse<Object>> {
    return this.http.post(
      `${this.ROOT_URL}/users/login`,
      {
        email,
        password,
      },
      { observe: "response" }
    );
  }

  signup(email: string, password: string): Observable<HttpResponse<Object>> {
    return this.http.post(
      `${this.ROOT_URL}/users`,
      {
        email,
        password,
      },
      { observe: "response" }
    );
  }

  forgotPassword(email: string): Observable<HttpResponse<Object>> {
    return this.http.post(
      `${this.ROOT_URL}/users/forgot-password`,
      { email },
      { observe: "response" }
    );
  }

  resetPassword(
    email: string,
    password: string
  ): Observable<HttpResponse<Object>> {
    return this.http.patch(
      `${this.ROOT_URL}/users/reset-password`,
      { email, password },
      { observe: "response" }
    );
  }

  checkToken(token: string): Observable<HttpResponse<Object>> {
    return this.http.post(
      `${this.ROOT_URL}/users/reset/check-token`,
      { token },
      { observe: "response" }
    );
  }
}
