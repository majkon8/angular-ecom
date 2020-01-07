import { Component } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { UsersService } from "src/app/services/users.service";
import { Subscription, Observable } from "rxjs";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent {
  isActive: boolean = false;
  isLoggedIn$: Observable<boolean>;
  loggedInUserId$: Observable<string>;
  isAdmin$: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ) {
    this.authService.checkIsAdmin();
    this.isLoggedIn$ = authService.isLoggedInObs$;
    this.loggedInUserId$ = usersService.loggedInUserIdObs$;
    this.isAdmin$ = authService.isAdminObs$;
  }

  toggleIsActive(): void {
    this.isActive = !this.isActive;
  }

  deactivate(): void {
    this.isActive = false;
  }

  logout(): void {
    this.authService.logout();
  }
}
