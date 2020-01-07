import { Component, Inject } from "@angular/core";
import { Product } from "src/app/models/product.model";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.scss"]
})
export class ProductFormComponent {
  product = new ProductForm(
    this.data.product.name,
    this.data.product.imageUrl,
    this.data.product.shortDescription,
    this.data.product.longDescription,
    this.data.product.price,
    this.data.product.tag
  );

  constructor(
    public dialogRef: MatDialogRef<ProductFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  validatePrice(e: { target: { value: string } }): void {
    if (!Number.isInteger(Number(e.target.value))) {
      e.target.value = Math.round(Number(e.target.value)).toString();
      return;
    }
    if (Number(e.target.value) < 1) {
      e.target.value = (1).toString();
      return;
    }
  }

  submit(): void {
    this.dialogRef.close({ product: this.product });
  }
}

export class ProductForm implements Product {
  constructor(
    public name: string = "",
    public imageUrl: string = "",
    public shortDescription: string = "",
    public longDescription: string = "",
    public price: number = 0,
    public tag: string = ""
  ) {}
}
