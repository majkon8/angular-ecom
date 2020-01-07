import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "src/app/models/product.model";
import { ProductsService } from "src/app/services/products.service";
import { UsersService } from "src/app/services/users.service";
import { Purchase } from "src/app/models/purchase.model";
import { CartItem } from "../cart/cart.component";
import { PurchasesService } from "src/app/services/purchases.service";
import { User } from "src/app/models/user.model";
import { Subscription } from "rxjs";
import { HttpResponse } from "@angular/common/http";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"]
})
export class CheckoutComponent implements OnInit {
  totalPrice: number;
  productsToBuy: Array<Purchase> = [];
  userId: string;
  user: User;
  userSubscription: Subscription;
  cartSubscription: Subscription;
  shippingDetails = new ShippingDetails();
  clearCartAfterCheckout: boolean;
  showSuccessMessage: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private usersService: UsersService,
    private purchasesService: PurchasesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userSubscription = this.usersService.loggedInUserIdObs$.subscribe(
      id => {
        this.userId = id;
        this.usersService.getUser(this.userId).subscribe((user: User) => {
          this.user = user;
          this.shippingDetails = new ShippingDetails(
            this.user.name.firstName,
            this.user.name.lastName,
            this.user.address.street,
            this.user.address.city,
            this.user.address.country,
            this.user.address.postcode
          );
        });
      }
    );
    this.route.paramMap.subscribe(paramMap => {
      const productId: string = paramMap.get("id");
      if (productId) {
        this.route.queryParamMap.subscribe(queryParamMap => {
          const quantity = Number(queryParamMap.get("quantity"));
          this.clearCartAfterCheckout = false;
          this.productsService
            .getOneProduct(productId)
            .subscribe((product: Product) => {
              this.productsToBuy.push({
                product,
                quantity,
                _userId: this.userId,
                shippingDetails: this.shippingDetails
              });
              this.totalPrice = product.price * quantity;
            });
        });
      } else {
        this.cartSubscription = this.usersService.cartObs$.subscribe(
          (cart: Array<CartItem>) => {
            if (cart.length === 0) this.router.navigate(["/"]);
            this.clearCartAfterCheckout = true;
            for (let el of cart) {
              this.productsToBuy.push({
                ...el,
                _userId: this.userId,
                shippingDetails: this.shippingDetails
              });
            }
            this.calculateTotalPrice();
          }
        );
      }
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
    if (this.cartSubscription) this.cartSubscription.unsubscribe();
  }

  calculateTotalPrice(): void {
    let total: number = 0;
    for (let el of this.productsToBuy) {
      total += el.quantity * el.product.price;
    }
    this.totalPrice = total;
  }

  order(): void {
    // Shipping details are required but often setting shippingDetails inside ngOnInit inside getUser().subscribe method is after setting productsToBuy later in ngOnInit so we need to set it manually before making request to server
    for (let el of this.productsToBuy) {
      el.shippingDetails = this.shippingDetails;
    }
    this.purchasesService
      .makePurchase(this.productsToBuy)
      .subscribe((res: HttpResponse<Object>) => {
        if (res.status === 200) {
          if (this.clearCartAfterCheckout)
            this.usersService.clearCart().subscribe();
          this.showSuccessMessage = true;
        }
      });
  }
}

export class ShippingDetails {
  constructor(
    public firstName?: string,
    public lastName?: string,
    public street?: string,
    public city?: string,
    public country?: string,
    public postcode?: string
  ) {}
}
