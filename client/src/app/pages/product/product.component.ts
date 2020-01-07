import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductsService } from "src/app/services/products.service";
import { Product } from "src/app/models/product.model";
import { UsersService } from "src/app/services/users.service";
import { Subscription, Observable } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { MatDialog } from "@angular/material";
import { HttpResponse } from "@angular/common/http";
import { ProductFormComponent } from "src/app/shared-components/product-form/product-form.component";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
  object = Object;
  product: Product;
  numberOfProducts: number = 1;
  baseUrlToReturn: string;
  urlToReturnParams: Object;
  showAddedToCartMessage: boolean = false;
  isLoggedIn: boolean;
  isLoggedInSubscription: Subscription;
  paramsSubscription: Subscription;
  urlSubscription: Subscription;
  isAdmin$: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.paramsSubscription = this.productsService.urlToReturnParamsObs$.subscribe(
      params => (this.urlToReturnParams = params)
    );
    this.urlSubscription = this.productsService.baseUrlToReturnObs$.subscribe(
      url => (this.baseUrlToReturn = url)
    );
    this.isAdmin$ = this.authService.isAdminObs$;
    this.authService.checkIsAdmin();
  }

  ngOnInit(): void {
    this.isLoggedInSubscription = this.authService.isLoggedInObs$.subscribe(
      isLoggedIn => (this.isLoggedIn = isLoggedIn)
    );
    const productId: string = this.route.snapshot.paramMap.get("id");
    this.productsService.getOneProduct(productId).subscribe(
      product => {
        if (!product) this.router.navigate(["/"]);
        this.product = product;
        const fixedUrl = this.product.imageUrl.replace("medium", "new-big");
        this.product.imageUrl = fixedUrl;
      },
      () => this.router.navigate(["/"])
    );
  }

  ngOnDestroy(): void {
    if (this.isLoggedInSubscription) this.isLoggedInSubscription.unsubscribe();
    if (this.paramsSubscription) this.paramsSubscription.unsubscribe();
    if (this.urlSubscription) this.urlSubscription.unsubscribe();
  }

  incrementProducts(): void {
    this.numberOfProducts++;
  }

  decrementProducts(): void {
    if (this.numberOfProducts === 1) return;
    this.numberOfProducts--;
  }

  validateControl(e: { target: { value: string } }): void {
    if (!Number.isInteger(Number(e.target.value))) {
      e.target.value = this.numberOfProducts.toString();
      return;
    }
    if (Number(e.target.value) < 1) {
      this.numberOfProducts = 1;
      e.target.value = (1).toString();
      return;
    }
    this.numberOfProducts = Number(e.target.value);
  }

  addToCart(): void {
    if (!this.isLoggedIn) {
      this.router.navigate(["/login"]);
      return;
    }
    this.usersService
      .addToCart(this.product, this.numberOfProducts)
      .subscribe();
    this.showAddedToCartMessage = true;
    setTimeout(() => {
      this.showAddedToCartMessage = false;
    }, 800);
  }

  editProduct(): void {
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
            if (res.status === 200) this.product = res.body;
          });
      }
    });
  }

  deleteProduct(): void {
    this.productsService
      .deleteProduct(this.product._id, this.authService.getUserId())
      .subscribe((res: HttpResponse<Product>) => {
        if (res.status === 200) {
          if (confirm("Do you want to permanently delete the product?")) {
            if (this.baseUrlToReturn) {
              this.router.navigate([
                this.baseUrlToReturn,
                this.urlToReturnParams
              ]);
            } else this.router.navigate(["/"]);
          } else return;
        }
      });
  }
}
