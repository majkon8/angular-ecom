import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { WebRequestService } from "../services/web-request.service";
import { HttpResponse } from "@angular/common/http";
import { User } from "../models/user.model";

@Injectable({
  providedIn: "root"
})
export class AdminGuard implements CanActivate {
  isAdmin: boolean;
  constructor(
    private webService: WebRequestService,
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> {
    return this.webService.get(`users/${this.authService.getUserId()}`).pipe(
      map((res: HttpResponse<User>) => {
        if (res.body.isAdmin) return true;
        this.router.navigate(["/"]);
        return false;
      })
    );
  }
}
