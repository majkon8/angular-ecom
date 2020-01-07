import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ProductComponent } from "./pages/product/product.component";
import { CartComponent } from "./pages/cart/cart.component";
import { AccountDetailsComponent } from "./pages/account-details/account-details.component";
import { AuthGuard } from "./guards/auth.guard";
import { CheckoutComponent } from "./pages/checkout/checkout.component";
import { AccountPurchasesComponent } from "./pages/account-purchases/account-purchases.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { AdminGuard } from "./guards/admin.guard";
import { CustomersComponent } from "./pages/customers/customers.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "products" },
  { path: "products", component: HomeComponent },
  { path: "cart", component: CartComponent, canActivate: [AuthGuard] },
  { path: "product/:id", component: ProductComponent },
  {
    path: "account",
    component: AccountDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "account/:id/details",
    component: AccountDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "account/:id/purchases",
    component: AccountPurchasesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "purchases",
    component: AccountPurchasesComponent,
    canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: "customers",
    component: CustomersComponent,
    canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: "checkout/:id",
    component: CheckoutComponent,
    canActivate: [AuthGuard]
  },
  { path: "checkout", component: CheckoutComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
