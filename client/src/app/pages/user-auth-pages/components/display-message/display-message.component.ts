import { Component, Input } from "@angular/core";

@Component({
  selector: "app-display-message",
  templateUrl: "./display-message.component.html",
  styleUrls: ["./display-message.component.scss"]
})
export class ErrorDisplayComponent {
  @Input() text: string;
  @Input() isSuccess: boolean = false;
}
