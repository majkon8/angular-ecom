import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { Observable, BehaviorSubject } from "rxjs";
import { WebRequestService } from "./web-request.service";
import { Product } from "../models/product.model";
import { HttpResponse } from "@angular/common/http";
import { CartItem } from "../pages/cart/cart.component";
import { map } from "rxjs/operators";
import { User } from "../models/user.model";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  userId: string;
  loggedInUserId = new BehaviorSubject<string>("");
  loggedInUserIdObs$ = this.loggedInUserId.asObservable();
  cart = new BehaviorSubject<Array<CartItem>>([]);
  cartObs$ = this.cart.asObservable();

  constructor(
    private authService: AuthService,
    private webService: WebRequestService
  ) {
    this.loggedInUserIdObs$.subscribe((id: string) => (this.userId = id));
    this.authService.isLoggedInObs$.subscribe((status: boolean) => {
      if (status) this.emitLoggedInUserId(this.authService.getUserId());
      else this.emitLoggedInUserId("");
    });
  }

  emitCart(cart: Array<CartItem>): void {
    this.cart.next(cart);
  }

  emitLoggedInUserId(id: string): void {
    this.loggedInUserId.next(id);
  }

  getUser(id: string): Observable<User> {
    return this.webService
      .get(`users/${id}`)
      .pipe(map((res: HttpResponse<User>) => res.body));
  }

  getAllUsers(adminId: string): Observable<Array<User>> {
    return this.webService
      .get("users", { _id: adminId })
      .pipe(map((res: HttpResponse<Array<User>>) => res.body));
  }

  updateUser(id: string, payload: Object): Observable<User> {
    return this.webService
      .patch(`users/${id}`, payload)
      .pipe(map((res: HttpResponse<User>) => res.body));
  }

  getCart(): void {
    this.webService
      .get(`users/${this.userId}/cart`)
      .subscribe((res: HttpResponse<Array<CartItem>>) =>
        this.emitCart(res.body)
      );
  }

  addToCart(product: Product, quantity: number): Observable<Object> {
    return this.webService.patch("users/cart/add", {
      userId: this.userId,
      cartItem: {
        product,
        quantity
      }
    });
  }

  removeFromCart(product: Product): Observable<Object> {
    return this.webService.patch("users/cart/remove", {
      userId: this.userId,
      product
    });
  }

  clearCart(): Observable<Object> {
    return this.webService.patch("users/cart/clear", { userId: this.userId });
  }
}
