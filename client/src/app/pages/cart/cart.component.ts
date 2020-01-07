import { Component, OnInit } from "@angular/core";
import { UsersService } from "src/app/services/users.service";
import { HttpResponse } from "@angular/common/http";
import { Product } from "src/app/models/product.model";
import { ProductsService } from "src/app/services/products.service";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"]
})
export class CartComponent implements OnInit {
  cart: Array<CartItem>;
  cartSubscription: Subscription;
  quantityTimeout: number;
  totalPrice: number;

  constructor(
    private usersService: UsersService,
    private productsService: ProductsService,
    private router: Router
  ) {
    this.productsService.emitBaseUrl("/cart");
  }

  ngOnInit(): void {
    this.cartSubscription = this.usersService.cartObs$.subscribe(cart => {
      this.cart = cart;
      this.calculateTotalPrice();
    });
    this.usersService.getCart();
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }

  incrementProducts(cartItem: CartItem): void {
    clearTimeout(this.quantityTimeout);
    for (let el of this.cart) {
      if (el._id === cartItem._id) {
        el.quantity++;
        break;
      }
    }
    this.quantityTimeout = window.setTimeout(() => {
      this.usersService
        .addToCart(cartItem.product, cartItem.quantity)
        .subscribe(() => this.calculateTotalPrice());
    }, 700);
  }

  decrementProducts(cartItem: CartItem): void {
    if (cartItem.quantity === 1) return;
    clearTimeout(this.quantityTimeout);
    for (let el of this.cart) {
      if (el._id === cartItem._id) {
        el.quantity--;
        break;
      }
    }
    this.quantityTimeout = window.setTimeout(() => {
      this.usersService
        .addToCart(cartItem.product, cartItem.quantity)
        .subscribe(() => this.calculateTotalPrice());
    }, 700);
  }

  validateControl(e: { target: { value: string } }, cartItem: CartItem): void {
    const numberOfProducts = cartItem.quantity;
    if (!Number.isInteger(Number(e.target.value))) {
      e.target.value = numberOfProducts.toString();
      return;
    }
    if (Number(e.target.value) < 1) {
      cartItem.quantity = 1;
      this.usersService
        .addToCart(cartItem.product, cartItem.quantity)
        .subscribe(() => this.calculateTotalPrice());
      e.target.value = (1).toString();
      return;
    }
    cartItem.quantity = Number(e.target.value);
    this.usersService
      .addToCart(cartItem.product, cartItem.quantity)
      .subscribe(() => this.calculateTotalPrice());
  }

  calculateTotalPrice(): void {
    let total: number = 0;
    for (let itemCart of this.cart) {
      total += itemCart.quantity * itemCart.product.price;
    }
    this.totalPrice = total;
  }

  removeFromCart(product: Product): void {
    this.usersService
      .removeFromCart(product)
      .subscribe((cart: HttpResponse<Array<CartItem>>) => {
        this.usersService.emitCart(cart.body);
        this.calculateTotalPrice();
      });
  }

  clearCart(): void {
    this.usersService
      .clearCart()
      .subscribe((cart: HttpResponse<Array<null>>) => {
        this.usersService.emitCart(cart.body);
        this.calculateTotalPrice();
      });
  }

  goToProduct(id: string): void {
    this.productsService.emitUrlParams({});
    this.router.navigate([`/product/${id}`]);
  }

  navigateToCheckout(): void {
    this.router.navigate(["/checkout"]);
  }
}

export interface CartItem {
  _id?: string;
  product: Product;
  quantity: number;
}
