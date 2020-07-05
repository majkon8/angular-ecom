import { Component, OnInit } from "@angular/core";
import { PurchasesService } from "src/app/services/purchases.service";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { Purchase } from "src/app/models/purchase.model";
import { ProductsService } from "src/app/services/products.service";
import { ProductParams } from "../home/home.component";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-account-purchases",
  templateUrl: "./account-purchases.component.html",
  styleUrls: ["./account-purchases.component.scss"]
})
export class AccountPurchasesComponent implements OnInit {
  purchases: Array<Purchase>;
  filteredAndSortedPurchases: Array<Purchase>;
  showShippingDetailsIds: Array<string> = [];
  searchFor: string = "";
  currentPage: number = 1;
  perPage: number = 20;
  totalPages: number;
  currentSort: string = "Date: new first";
  userId: string;
  isAdmin: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private purchasesService: PurchasesService,
    private productsService: ProductsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      if (paramMap.get("id")) {
        this.userId = paramMap.get("id");
        this.purchasesService.getAllPurchasesForUser(this.userId).subscribe(
          (purchases: Array<Purchase>) =>
            this.initializePurchases(purchases, paramMap),
          () => this.router.navigate(["/"])
        );
      } else {
        this.isAdmin = true;
        this.purchasesService
          .getAllPurchases(this.authService.getUserId())
          .subscribe((purchases: Array<Purchase>) =>
            this.initializePurchases(purchases, paramMap)
          );
      }
    });
  }

  initializePurchases(purchases: Array<Purchase>, paramMap: ParamMap): void {
    this.purchases = purchases;
    this.filteredAndSortedPurchases = purchases;
    this.setTotalPages();
    if (paramMap.get("perPage")) this.perPage = Number(paramMap.get("perPage"));
    if (paramMap.get("page")) this.currentPage = Number(paramMap.get("page"));
    if (paramMap.get("search")) {
      this.searchFor = paramMap.get("search");
      this.filterByName();
    }
    if (paramMap.get("sort")) {
      this.currentSort = paramMap.get("sort");
    }
  }

  toggleShippingDetails(id: string): void {
    if (this.showShippingDetailsIds.includes(id)) {
      const index = this.showShippingDetailsIds.indexOf(id);
      this.showShippingDetailsIds.splice(index, 1);
    } else {
      this.showShippingDetailsIds.push(id);
    }
  }

  filterByName(): void {
    const arr: Array<Purchase> = [];
    for (let purchase of this.purchases) {
      if (
        purchase.product.name
          .toLowerCase()
          .includes(this.searchFor.toLowerCase())
      )
        arr.push(purchase);
    }
    this.filteredAndSortedPurchases = arr;
    this.setTotalPages();
    this.currentPage = 1;
  }

  selectPerPage(num: number): void {
    this.perPage = num;
    this.setTotalPages();
    this.currentPage = 1;
  }

  setTotalPages(): void {
    this.totalPages = Math.ceil(
      this.filteredAndSortedPurchases.length / this.perPage
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
    if (!this.isAdmin)
      this.productsService.emitBaseUrl(`/account/${this.userId}/purchases`);
    else this.productsService.emitBaseUrl(`/purchases`);
    this.productsService.emitUrlParams(this.generateUrlParams());
    this.router.navigate([`/product/${id}`]);
  }

  generateUrlParams(): ProductParams {
    return {
      page: this.currentPage,
      perPage: this.perPage,
      sort: this.currentSort,
      search: this.searchFor
    };
  }

  goToUser(event: any, id: string): void {
    event.preventDefault();
    this.router.navigate([`/account/${id}/details`]);
  }
}
