import { Component, Input } from "@angular/core";

@Component({
  selector: "app-form-info",
  templateUrl: "./form-info.component.html",
  styleUrls: ["./form-info.component.scss"]
})
export class FormInfoComponent {
  @Input() page: string;
}
