import { Component, Input, OnInit } from "@angular/core";
import { Product } from "src/app/models/product.model";
import { UsersService } from "src/app/services/users.service";
import { HttpResponse } from "@angular/common/http";
import { CartItem } from "src/app/pages/cart/cart.component";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { Subscription } from "rxjs";
import { ProductFormComponent } from "src/app/shared-components/product-form/product-form.component";
import { ProductsService } from "src/app/services/products.service";
import { MatDialog } from "@angular/material";

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"]
})
export class ItemCardComponent implements OnInit {
  isLoggedIn: boolean;
  isLoggedInSubscription: Subscription;
  @Input() addedToCart: boolean;
  @Input() product: Product;
  @Input() isAdmin: boolean;

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private productsService: ProductsService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedInSubscription = this.authService.isLoggedInObs$.subscribe(
      isLoggedIn => (this.isLoggedIn = isLoggedIn)
    );
  }

  ngOnDestroy(): void {
    if (this.isLoggedInSubscription) this.isLoggedInSubscription.unsubscribe();
  }

  manageCart(): void {
    if (!this.isLoggedIn) {
      this.router.navigate(["/login"]);
      return;
    }
    if (this.addedToCart) this.removeFromCart();
    else this.addToCart();
  }

  addToCart(): void {
    this.usersService
      .addToCart(this.product, 1)
      .subscribe((cart: HttpResponse<Array<CartItem>>) =>
        this.usersService.emitCart(cart.body)
      );
    this.addedToCart = true;
  }

  removeFromCart(): void {
    this.usersService
      .removeFromCart(this.product)
      .subscribe((cart: HttpResponse<Array<CartItem>>) =>
        this.usersService.emitCart(cart.body)
      );
    this.addedToCart = false;
  }

  editProduct(event: any): void {
    event.preventDefault();
    const dialogRef = this.dialog.open(ProductFormComponent, {
      width: "580px",
      height: "90%",
      data: { type: "edit", product: this.product }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productsService
          .editProduct(
            { ...result.product, _id: this.product._id },
            this.authService.getUserId()
          )
          .subscribe((res: HttpResponse<Product>) => {
            if (res.status === 200) this.productsService.getAllProducts();
          });
      }
    });
  }

  deleteProduct(event: any): void {
    event.preventDefault();
    this.productsService
      .deleteProduct(this.product._id, this.authService.getUserId())
      .subscribe((res: HttpResponse<Product>) => {
        if (res.status === 200) {
          if (confirm("Do you want to permanently delete the product?"))
            this.productsService.getAllProducts();
          else return;
        }
      });
  }
}
