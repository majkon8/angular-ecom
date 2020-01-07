import {
  Component,
  ChangeDetectorRef,
  Input,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "app-main-pagination",
  templateUrl: "./main-pagination.component.html",
  styleUrls: ["./main-pagination.component.scss"]
})
export class MainPaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number;
  @Output() pageChanged = new EventEmitter<number>();

  constructor(private cdRef: ChangeDetectorRef) {}

  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) this.currentPage++;
    this.changePage();
  }

  previousPage(): void {
    if (this.currentPage > 1) this.currentPage--;
    this.changePage();
  }

  goToPage(pageAsString: string): void {
    this.currentPage = Number(pageAsString);
    this.changePage();
  }

  changePage(): void {
    this.pageChanged.emit(this.currentPage);
  }
}
