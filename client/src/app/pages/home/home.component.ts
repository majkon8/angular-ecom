import { Component, OnInit } from "@angular/core";
import { ProductsService } from "src/app/services/products.service";
import { Product } from "src/app/models/product.model";
import { Router, ActivatedRoute } from "@angular/router";
import { UsersService } from "src/app/services/users.service";
import { CartItem } from "../cart/cart.component";
import { AuthService } from "src/app/services/auth.service";
import { Subscription, Observable } from "rxjs";
import { MatDialog } from "@angular/material";
import { ProductFormComponent } from "src/app/shared-components/product-form/product-form.component";
import { HttpResponse } from "@angular/common/http";
import { ProductForm } from "../../shared-components/product-form/product-form.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  allProducts: Array<Product>;
  filteredAndSortedProducts: Array<Product>;
  currentFilters: Array<string> = [];
  idsOfProductsInCart: Array<string> = [];
  perPage: number = 20;
  currentPage: number = 1;
  totalPages: number;
  currentSort: string = "Randomize";
  searchFor: string = "";
  productsSubscription: Subscription;
  cartSubscription: Subscription;
  isAdmin$: Observable<boolean>;

  constructor(
    private productsService: ProductsService,
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {
    this.initializeProducts();
    this.initializeCart();
    this.authService.checkIsAdmin();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts();
    if (!this.authService.checkIsLoggedIn()) return;
    this.usersService.getCart();
    this.isAdmin$ = this.authService.isAdminObs$;
  }

  ngOnDestroy(): void {
    if (this.productsSubscription) this.productsSubscription.unsubscribe();
    if (this.cartSubscription) this.cartSubscription.unsubscribe();
  }

  initializeProducts(): void {
    this.productsSubscription = this.productsService.allProductsObs$.subscribe(
      (allProducts: Array<Product>) => {
        this.allProducts = allProducts;
        this.filteredAndSortedProducts = allProducts;
        this.setTotalPages();
        this.filterByTagsAndName();
        this.route.paramMap.subscribe(paramMap => {
          if (paramMap.get("perPage"))
            this.perPage = Number(paramMap.get("perPage"));
          if (paramMap.get("page"))
            this.currentPage = Number(paramMap.get("page"));
          if (paramMap.get("search")) {
            this.searchFor = paramMap.get("search");
            this.filterByTagsAndName();
          }
          if (paramMap.get("tags")) {
            this.currentFilters = paramMap.get("tags").split(",");
            this.filterByTagsAndName();
          }
          if (paramMap.get("sort")) {
            this.currentSort = paramMap.get("sort");
          }
        });
      }
    );
  }

  initializeCart(): void {
    if (!this.authService.checkIsLoggedIn()) return;
    this.cartSubscription = this.usersService.cartObs$.subscribe(
      (cart: Array<CartItem>) => {
        if (cart.length === 0) return;
        for (let el of cart) {
          this.idsOfProductsInCart.push(el.product._id);
        }
      }
    );
  }

  filterByTagsAndName(event?: any): void {
    if (event) {
      const target = event.currentTarget;
      const idAttr = target.attributes.id;
      const newFilterName: string = idAttr.nodeValue;
      if (!this.currentFilters.includes(newFilterName)) {
        this.currentFilters.push(newFilterName);
      } else {
        this.currentFilters = this.currentFilters.filter(
          el => el !== newFilterName
        );
      }
      this.currentPage = 1;
    }
    this.filteredAndSortedProducts = this.allProducts.filter(product =>
      this.filterCriterium(product, this.currentFilters)
    );
    if (this.searchFor) {
      const arr: Array<Product> = [];
      for (let product of this.filteredAndSortedProducts) {
        if (product.name.toLowerCase().includes(this.searchFor.toLowerCase()))
          arr.push(product);
      }
      this.filteredAndSortedProducts = arr;
      this.currentPage = 1;
    }
    this.setTotalPages();
  }

  filterCriterium(product: Product, filters: Array<string>): boolean {
    if (filters.length === 0) return true;
    return filters.includes(product.tag);
  }

  clearTags(): void {
    this.currentFilters = [];
    this.currentPage = 1;
    this.filterByTagsAndName();
  }

  selectPerPage(num: number): void {
    this.perPage = num;
    this.setTotalPages();
    this.currentPage = 1;
  }

  setTotalPages(): void {
    this.totalPages = Math.ceil(
      this.filteredAndSortedProducts.length / this.perPage
    );
  }

  setCurrentPage(num: number): void {
    this.currentPage = num;
  }

  changeSort(sortName: string): void {
    this.currentSort = sortName;
  }

  goToProduct(event: any, id: string): void {
    event.preventDefault();
    this.productsService.emitBaseUrl("/products");
    this.productsService.emitUrlParams(this.generateUrlParams());
    this.router.navigate([`/product/${id}`]);
  }

  generateUrlParams(): ProductParams {
    return {
      page: this.currentPage,
      perPage: this.perPage,
      tags: this.currentFilters,
      sort: this.currentSort,
      search: this.searchFor
    };
  }

  newProduct(): void {
    const dialogRef = this.dialog.open(ProductFormComponent, {
      width: "580px",
      height: "90%",
      data: { type: "new", product: new ProductForm() }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productsService
          .addNewProduct(result.product, this.authService.getUserId())
          .subscribe((res: HttpResponse<Product>) => {
            if (res.status === 200) this.productsService.getAllProducts();
          });
      }
    });
  }
}

export interface ProductParams {
  page?: number;
  perPage?: number;
  tags?: Array<string>;
  sort?: string;
  search?: string;
}
