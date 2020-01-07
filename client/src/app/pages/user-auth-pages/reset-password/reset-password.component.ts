import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrls: ["reset-password.component.scss"]
})
export class ResetPasswordComponent implements OnInit {
  resetForm: FormGroup;
  displayErrorMessage: boolean = false;
  displaySuccessMessage: boolean = false;
  userEmail: string;
  secondsLeft: number = 5;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.resetForm = new FormGroup({
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

    this.route.paramMap.subscribe(params => {
      const token = params.get("token");
      this.authService.checkToken(token).subscribe(
        (res: HttpResponse<any>) => {
          if (res.status === 200) this.userEmail = res.body.email;
        },
        (err: HttpErrorResponse) => {
          if (err) this.router.navigate(["/login"]);
        }
      );
    });
  }

  onSubmit(): void {
    const newPassword = this.resetForm.get("password").value;
    if (newPassword !== this.resetForm.get("confirmPassword").value) return;
    this.authService.resetPassword(this.userEmail, newPassword).subscribe(
      (res: HttpResponse<any>) => {
        if (res.status === 200) {
          this.displayErrorMessage = false;
          this.displaySuccessMessage = true;
          setInterval(() => {
            this.secondsLeft--;
            if (this.secondsLeft === 0) this.router.navigate(["/login"]);
          }, 1000);
        }
      },
      (err: HttpErrorResponse) => {
        if (err) {
          this.displaySuccessMessage = false;
          this.displayErrorMessage = true;
        }
      }
    );
  }
}
