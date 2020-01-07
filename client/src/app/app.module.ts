import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./pages/navbar/navbar.component";
import { UserAuthPagesModule } from "./pages/user-auth-pages/user-auth-pages.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { WebReqInterceptor } from "./interceptors/web-req.interceptor";
import { HomeComponent } from "./pages/home/home.component";
import { ItemCardComponent } from "./pages/home/components/product-card/product-card.component";
import { SortByComponent } from "./shared-components/sort-by/sort-by.component";
import { PerPageComponent } from "./shared-components/per-page/per-page.component";
import { ClickOutsideDirective } from "./directives/click-outside.directive";
import { MainPaginationComponent } from "./shared-components/main-pagination/main-pagination.component";
import { SecondaryPaginationComponent } from "./shared-components/secondary-pagination/secondary-pagination.component";
import { ProductComponent } from "./pages/product/product.component";
import { FormsModule } from "@angular/forms";
import { CartComponent } from "./pages/cart/cart.component";
import { AccountDetailsComponent } from "./pages/account-details/account-details.component";
import { MatDialogModule } from "@angular/material";
import { EditFormComponent } from "./pages/account-details/components/edit-form/edit-form.component";
import { CheckoutComponent } from "./pages/checkout/checkout.component";
import { AccountPurchasesComponent } from "./pages/account-purchases/account-purchases.component";
import { FooterComponent } from "./pages/footer/footer.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { ProductFormComponent } from "./shared-components/product-form/product-form.component";
import { CustomersComponent } from "./pages/customers/customers.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ItemCardComponent,
    SortByComponent,
    PerPageComponent,
    ClickOutsideDirective,
    MainPaginationComponent,
    SecondaryPaginationComponent,
    ProductComponent,
    CartComponent,
    AccountDetailsComponent,
    EditFormComponent,
    CheckoutComponent,
    AccountPurchasesComponent,
    FooterComponent,
    PageNotFoundComponent,
    ProductFormComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthPagesModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: WebReqInterceptor, multi: true }
  ],
  entryComponents: [EditFormComponent, ProductFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
