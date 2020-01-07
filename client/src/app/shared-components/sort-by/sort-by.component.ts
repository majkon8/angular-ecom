import {
  Component,
  HostListener,
  Output,
  EventEmitter,
  Input
} from "@angular/core";
import { Subscription } from "rxjs";
import { ProductsService } from "src/app/services/products.service";

@Component({
  selector: "app-sort-by",
  templateUrl: "./sort-by.component.html",
  styleUrls: ["./sort-by.component.scss"]
})
export class SortByComponent {
  isActive: boolean = false;
  innerWidth: number;
  productsSubscription: Subscription;
  @Input() currentSort: string;
  @Input() page: string;
  @Input() toSortArr: Array<any>;
  @Output() sortChanged = new EventEmitter<string>();

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.productsSubscription = this.productsService.allProductsObs$.subscribe(
      () => this.sort()
    );
  }

  ngOnChanges(): void {
    if (this.toSortArr) this.sort();
  }

  @HostListener("window:resize")
  onResize(): void {
    this.innerWidth = window.innerWidth;
  }

  toggleIsActive(): void {
    this.isActive = !this.isActive;
  }

  deactivate(): void {
    this.isActive = false;
  }

  changeSort(sortName: string): void {
    this.currentSort = sortName.trim();
    this.sortChanged.emit(this.currentSort);
  }

  sort(sortName?: string): void {
    if (!this.toSortArr) return;
    if (sortName) this.currentSort = sortName;
    switch (this.currentSort) {
      case "Randomize":
        this.randomize();
        break;
      case "Price: ascending":
        this.sortPriceAsc();
        break;
      case "Price: descending":
        this.sortPriceDesc();
        break;
      case "Name: A-Z":
        this.sortNameAsc();
        break;
      case "Name: Z-A":
        this.sortNameDesc();
        break;
      case "Date: new first":
        this.sortDateNewFirst();
        break;
      case "Date: old first":
        this.sortDateOldFirst();
        break;
    }
  }

  randomize(): void {
    if (!this.toSortArr) return;
    const arr: Array<any> = this.toSortArr;
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    this.toSortArr = arr;
  }

  sortPriceAsc(): void {
    this.toSortArr.sort((el1, el2) => {
      if (el1.product)
        return (
          el1.product.price * el1.quantity - el2.product.price * el2.quantity
        );
      return el1.price - el2.price;
    });
  }

  sortPriceDesc(): void {
    this.toSortArr.sort((el1, el2) => {
      if (el1.product)
        return (
          el2.product.price * el2.quantity - el1.product.price * el1.quantity
        );
      return el2.price - el1.price;
    });
  }

  sortNameAsc(): void {
    this.toSortArr.sort((el1, el2) => {
      if (el1.product) [el1, el2] = [el1.product, el2.product];
      if (el1.name.lastName) {
        [el1, el2] = [el1.name.lastName, el2.name.lastName];
        if (el1 > el2) return 1;
        if (el2 > el1) return -1;
        return 0;
      }
      if (el1.name > el2.name) return 1;
      if (el2.name > el1.name) return -1;
      return 0;
    });
  }

  sortNameDesc(): void {
    this.toSortArr.sort((el1, el2) => {
      if (el1.product) [el1, el2] = [el1.product, el2.product];
      if (el1.name.lastName) {
        [el1, el2] = [el1.name.lastName, el2.name.lastName];
        if (el1 > el2) return -1;
        if (el2 > el1) return 1;
        return 0;
      }
      if (el1.name > el2.name) return -1;
      if (el2.name > el1.name) return 1;
      return 0;
    });
  }

  sortDateNewFirst(): void {
    this.toSortArr.sort(
      (el1, el2) => +new Date(el1.date) - +new Date(el2.date)
    );
  }

  sortDateOldFirst(): void {
    this.toSortArr.sort(
      (el1, el2) => +new Date(el2.date) - +new Date(el1.date)
    );
  }
}
