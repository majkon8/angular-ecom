import { Component, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-per-page",
  templateUrl: "./per-page.component.html",
  styleUrls: ["./per-page.component.scss"]
})
export class PerPageComponent {
  isActive: boolean = false;
  @Input() perPage: number = 20;
  @Output() perPageSelected = new EventEmitter<number>();

  toggleIsActive(): void {
    this.isActive = !this.isActive;
  }

  deactivate(): void {
    this.isActive = false;
  }

  selectPerPage(numberAsString: string): void {
    this.perPage = Number(numberAsString);
    this.perPageSelected.emit(this.perPage);
  }
}
