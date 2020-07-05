import { Injectable } from "@angular/core";
import { WebRequestService } from "./web-request.service";
import { Router } from "@angular/router";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { shareReplay, tap } from "rxjs/operators";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "../models/user.model";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  isAdmin = new BehaviorSubject<boolean>(false);
  isAdminObs$ = this.isAdmin.asObservable();
  isLoggedIn = new BehaviorSubject<boolean>(this.checkIsLoggedIn());
  isLoggedInObs$ = this.isLoggedIn.asObservable();

  constructor(
    private webService: WebRequestService,
    private router: Router,
    private http: HttpClient
  ) {}

  emitIsLoggedIn(loggedInStatus: boolean): void {
    this.isLoggedIn.next(loggedInStatus);
  }

  emitIsAdmin(adminStatus: boolean): void {
    this.isAdmin.next(adminStatus);
  }

  login(
    email: string,
    password: string,
    remember: boolean = true
  ): Observable<HttpResponse<User>> {
    return this.webService.login(email, password).pipe(
      shareReplay(),
      tap((res: HttpResponse<User>) => {
        // the auth tokens will be in header of this response
        this.setSession(
          res.body._id,
          res.headers.get("x-access-token"),
          res.headers.get("x-refresh-token"),
          remember
        );
        this.emitIsAdmin(res.body.isAdmin);
        this.emitIsLoggedIn(true);
      })
    );
  }

  signup(email: string, password: string): Observable<HttpResponse<User>> {
    return this.webService.signup(email, password).pipe(
      shareReplay(),
      tap((res: HttpResponse<User>) => {
        // the auth tokens will be in header of this response
        this.setSession(
          res.body._id,
          res.headers.get("x-access-token"),
          res.headers.get("x-refresh-token")
        );
        this.emitIsAdmin(res.body.isAdmin);
        this.emitIsLoggedIn(true);
      })
    );
  }

  logout(): void {
    this.removeSession();
    this.emitIsLoggedIn(false);
    this.emitIsAdmin(false);
    this.router.navigate(["/login"]);
  }

  forgotPassword(email: string): Observable<HttpResponse<Object>> {
    return this.webService.forgotPassword(email);
  }

  resetPassword(
    email: string,
    password: string
  ): Observable<HttpResponse<any>> {
    return this.webService.resetPassword(email, password);
  }

  checkToken(token: string): Observable<HttpResponse<Object>> {
    return this.webService.checkToken(token);
  }

  getAccessToken(): string {
    return (
      localStorage.getItem("x-access-token") ||
      sessionStorage.getItem("x-access-token")
    );
  }

  getRefreshToken(): string {
    return (
      localStorage.getItem("x-refresh-token") ||
      sessionStorage.getItem("x-refresh-token")
    );
  }

  getUserId(): string {
    return localStorage.getItem("user-id") || sessionStorage.getItem("user-id");
  }

  setAccessToken(accessToken: string): void {
    if (localStorage.getItem("x-access-token"))
      localStorage.setItem("x-access-token", accessToken);
    if (sessionStorage.getItem("x-access-token"))
      sessionStorage.setItem("x-access-token", accessToken);
  }

  getNewAccessToken(): Observable<HttpResponse<any>> {
    return this.http
      .get(`/users/me/access-token`, {
        headers: {
          "x-refresh-token": this.getRefreshToken(),
          _id: this.getUserId()
        },
        observe: "response"
      })
      .pipe(
        tap((res: HttpResponse<any>) => {
          this.setAccessToken(res.headers.get("x-access-token"));
        })
      );
  }

  checkIsLoggedIn(): boolean {
    if (this.getAccessToken()) return true;
    return false;
  }

  checkIsAdmin(): void {
    this.webService
      .get(`users/${this.getUserId()}`)
      .subscribe((res: HttpResponse<User>) =>
        this.emitIsAdmin(res.body.isAdmin)
      );
  }

  private setSession(
    userId: string,
    accessToken: string,
    refreshToken: string,
    remember: boolean = true
  ): void {
    if (remember) {
      localStorage.setItem("user-id", userId);
      localStorage.setItem("x-access-token", accessToken);
      localStorage.setItem("x-refresh-token", refreshToken);
    } else {
      sessionStorage.setItem("user-id", userId);
      sessionStorage.setItem("x-access-token", accessToken);
      sessionStorage.setItem("x-refresh-token", refreshToken);
    }
  }

  private removeSession(): void {
    localStorage.removeItem("user-id");
    localStorage.removeItem("x-access-token");
    localStorage.removeItem("x-refresh-token");
    sessionStorage.removeItem("user-id");
    sessionStorage.removeItem("x-access-token");
    sessionStorage.removeItem("x-refresh-token");
  }
}
