import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-user-auth-control",
  templateUrl: "./user-auth-control.component.html",
  styleUrls: ["./user-auth-control.component.scss"]
})
export class UserAuthControlComponent {
  @Input() formGroup: FormGroup;
  @Input() controlName: string;
  @Input() type: string;
  @Input() placeholder: string;
}
