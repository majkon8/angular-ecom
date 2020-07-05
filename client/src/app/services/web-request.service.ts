import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class WebRequestService {
  readonly ROOT_URL: string;

  constructor(private http: HttpClient) {
  }

  get(uri: string, headers: any = ""): Observable<Object> {
    return this.http.get(`/${uri}`, {
      headers,
      observe: "response"
    });
  }

  post(uri: string, payload: Object, headers: any = ""): Observable<Object> {
    return this.http.post(`/${uri}`, payload, {
      headers,
      observe: "response"
    });
  }

  patch(uri: string, payload: Object, headers: any = ""): Observable<Object> {
    return this.http.patch(`/${uri}`, payload, {
      headers,
      observe: "response"
    });
  }

  delete(uri: string, headers: any = ""): Observable<Object> {
    return this.http.delete(`/${uri}`, {
      headers,
      observe: "response"
    });
  }

  login(email: string, password: string): Observable<HttpResponse<Object>> {
    return this.http.post(
      `/users/login`,
      {
        email,
        password
      },
      { observe: "response" }
    );
  }

  signup(email: string, password: string): Observable<HttpResponse<Object>> {
    return this.http.post(
      `/users`,
      {
        email,
        password
      },
      { observe: "response" }
    );
  }

  forgotPassword(email: string): Observable<HttpResponse<Object>> {
    return this.http.post(
      `/users/forgot-password`,
      { email },
      { observe: "response" }
    );
  }

  resetPassword(
    email: string,
    password: string
  ): Observable<HttpResponse<Object>> {
    return this.http.patch(
      `/users/reset-password`,
      { email, password },
      { observe: "response" }
    );
  }

  checkToken(token: string): Observable<HttpResponse<Object>> {
    return this.http.post(
      `/users/reset/check-token`,
      { token },
      { observe: "response" }
    );
  }
}
