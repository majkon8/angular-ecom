import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: "app-edit-form",
  templateUrl: "./edit-form.component.html",
  styleUrls: ["./edit-form.component.scss"]
})
export class EditFormComponent {
  personalInformations = new PersonalInformations(
    this.data.user.email,
    this.data.user.name.firstName,
    this.data.user.name.lastName
  );
  addressDetails = new AddressDetails(
    this.data.user.address.street,
    this.data.user.address.city,
    this.data.user.address.country,
    this.data.user.address.postcode
  );

  constructor(
    public dialogRef: MatDialogRef<EditFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  updatePersonalInfo(): void {
    this.dialogRef.close({
      email: this.personalInformations.email,
      name: {
        firstName: this.personalInformations.firstName,
        lastName: this.personalInformations.lastName
      }
    });
  }

  updateAddressDetails(): void {
    this.dialogRef.close({
      address: {
        street: this.addressDetails.street,
        city: this.addressDetails.city,
        country: this.addressDetails.country,
        postcode: this.addressDetails.postcode
      }
    });
  }
}

class PersonalInformations {
  constructor(
    public email: string,
    public firstName?: string,
    public lastName?: string
  ) {}
}

class AddressDetails {
  constructor(
    public street?: string,
    public city?: string,
    public country?: string,
    public postcode?: string
  ) {}
}
