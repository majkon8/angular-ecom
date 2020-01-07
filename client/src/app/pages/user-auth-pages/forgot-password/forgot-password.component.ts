import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { HttpResponse, HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"]
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  displaySuccessMessage: boolean = false;
  displayErrorMessage: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,63}$")
      ])
    });
  }

  onSubmit(): void {
    const email = this.forgotPasswordForm.get("email").value;
    this.authService.forgotPassword(email).subscribe(
      (res: HttpResponse<any>) => {
        if (res.status === 200) {
          this.displayErrorMessage = false;
          this.displaySuccessMessage = true;
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
