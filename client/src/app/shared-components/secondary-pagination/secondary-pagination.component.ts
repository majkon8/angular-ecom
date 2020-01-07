import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-secondary-pagination",
  templateUrl: "./secondary-pagination.component.html",
  styleUrls: ["./secondary-pagination.component.scss"]
})
export class SecondaryPaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number;
  @Output() pageChanged = new EventEmitter<number>();

  nextPage(): void {
    if (this.currentPage < this.totalPages) this.currentPage++;
    this.changePage();
  }

  previousPage(): void {
    if (this.currentPage > 1) this.currentPage--;
    this.changePage();
  }

  validatePageControl(e: { target: { value: string } }): void {
    if (!Number.isInteger(Number(e.target.value))) {
      e.target.value = this.currentPage.toString();
      this.changePage();
      return;
    }
    if (Number(e.target.value) > this.totalPages) {
      this.currentPage = this.totalPages;
      e.target.value = this.totalPages.toString();
      this.changePage();
      return;
    } else if (Number(e.target.value) < 1) {
      this.currentPage = 1;
      e.target.value = (1).toString();
      this.changePage();
      return;
    }
    this.currentPage = Number(e.target.value);
    this.changePage();
  }

  changePage(): void {
    this.pageChanged.emit(this.currentPage);
  }
}
