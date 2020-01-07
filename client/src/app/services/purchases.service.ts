import { Injectable } from "@angular/core";
import { WebRequestService } from "./web-request.service";
import { map } from "rxjs/operators";
import { HttpResponse } from "@angular/common/http";
import { Purchase } from "../models/purchase.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PurchasesService {
  constructor(private webService: WebRequestService) {}

  getAllPurchases(adminId: string): Observable<Array<Purchase>> {
    return this.webService
      .get("purchases", { _id: adminId })
      .pipe(map((res: HttpResponse<Array<Purchase>>) => res.body));
  }

  getAllPurchasesForUser(userId: string): Observable<Array<Purchase>> {
    return this.webService
      .get(`purchases/${userId}`)
      .pipe(map((res: HttpResponse<Array<Purchase>>) => res.body));
  }

  makePurchase(arrayOfPurchases: Array<Purchase>): Observable<Object> {
    return this.webService.post("purchases", { arrayOfPurchases });
  }
}
