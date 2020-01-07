import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { UsersService } from "src/app/services/users.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  errorMessage: string;

  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
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
      confirmPassword: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern("(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}")
      ])
    });
  }

  onSubmit(): void {
    const email = this.signupForm.get("email").value;
    const password = this.signupForm.get("password").value;
    if (password !== this.signupForm.get("confirmPassword").value) return;
    this.authService.signup(email, password).subscribe(
      (res: HttpResponse<any>) => {
        if (res.status === 200) {
          this.usersService.userId = this.authService.getUserId();
          this.usersService.getCart();
          this.router.navigate(["/"]);
        } else
          this.errorMessage = "Something went wrong. Please try again later";
      },
      (err: HttpErrorResponse) => {
        if (err && err.error.code === 11000) {
          this.errorMessage = "This email address is already in use";
        } else if (err)
          this.errorMessage = "Something went wrong. Please try again later";
      }
    );
  }
}
