import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { UsersService } from "src/app/services/users.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  displayErrorMessage: boolean = false;

  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,63}$")
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern("(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}")
      ]),
      remember: new FormControl(true)
    });
  }

  onSubmit(): void {
    const email = this.loginForm.get("email").value;
    const password = this.loginForm.get("password").value;
    const remember = this.loginForm.get("remember").value;
    this.authService.login(email, password, remember).subscribe(
      (res: HttpResponse<any>) => {
        if (res.status === 200) {
          this.usersService.userId = this.authService.getUserId();
          this.usersService.getCart();
          this.router.navigate(["/"]);
        }
      },
      (err: HttpErrorResponse) => {
        if (err) this.displayErrorMessage = true;
      }
    );
  }
}
