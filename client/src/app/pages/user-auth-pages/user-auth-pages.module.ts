import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { SubmitButtonComponent } from "./components/submit-button/submit-button.component";
import { FormHeaderComponent } from "./components/form-header/form-header.component";
import { FormInfoComponent } from "./components/form-info/form-info.component";
import { UserAuthControlComponent } from "./components/user-auth-control/user-auth-control.component";
import { UserAuthPagesRoutingModule } from "./user-auth-pages-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { ErrorDisplayComponent } from "./components/display-message/display-message.component";

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    SubmitButtonComponent,
    FormHeaderComponent,
    FormInfoComponent,
    UserAuthControlComponent,
    ErrorDisplayComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, UserAuthPagesRoutingModule]
})
export class UserAuthPagesModule {}
