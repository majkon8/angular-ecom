import { Injectable } from "@angular/core";
import { WebRequestService } from "./web-request.service";
import { Product } from "../models/product.model";
import { Subject, Observable, BehaviorSubject } from "rxjs";
import { HttpResponse } from "@angular/common/http";
import { map } from "rxjs/operators";
import { ProductParams } from "../pages/home/home.component";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  allProducts = new Subject<Array<Product>>();
  allProductsObs$ = this.allProducts.asObservable();
  baseUrlToReturn = new BehaviorSubject<string>("");
  baseUrlToReturnObs$ = this.baseUrlToReturn.asObservable();
  urlToReturnParams = new BehaviorSubject<ProductParams>({});
  urlToReturnParamsObs$ = this.urlToReturnParams.asObservable();

  constructor(private webService: WebRequestService) {}

  emitAllProducts(products: Array<Product>): void {
    this.allProducts.next(products);
  }

  emitUrlParams(params: ProductParams): void {
    this.urlToReturnParams.next(params);
  }

  emitBaseUrl(url: string): void {
    this.baseUrlToReturn.next(url);
  }

  getAllProducts(): void {
    this.webService
      .get("products")
      .subscribe((res: HttpResponse<Array<Product>>) =>
        this.emitAllProducts(res.body)
      );
  }

  getOneProduct(id: string): Observable<Product> {
    return this.webService
      .get(`products/${id}`)
      .pipe(map((response: HttpResponse<Product>) => response.body));
  }

  addNewProduct(product: Product, adminId: string) {
    return this.webService.post("products", product, { _id: adminId });
  }

  editProduct(product: Product, adminId: string) {
    return this.webService.patch("products", product, { _id: adminId });
  }

  deleteProduct(productId: string, adminId: string) {
    return this.webService.delete(`products/${productId}`, { _id: adminId });
  }
}
