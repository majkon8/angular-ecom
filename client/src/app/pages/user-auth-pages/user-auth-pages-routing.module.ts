import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { IsLoggedInGuard } from "src/app/guards/is-logged-in.guard";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    canActivate: [IsLoggedInGuard]
  },
  {
    path: "signup",
    component: SignupComponent,
    canActivate: [IsLoggedInGuard]
  },
  {
    path: "forgot",
    component: ForgotPasswordComponent,
    canActivate: [IsLoggedInGuard]
  },
  {
    path: "reset/:token",
    component: ResetPasswordComponent,
    canActivate: [IsLoggedInGuard]
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAuthPagesRoutingModule {}
