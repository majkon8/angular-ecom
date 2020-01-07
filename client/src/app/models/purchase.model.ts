import { Product } from "./product.model";
import { ShippingDetails } from "../pages/checkout/checkout.component";

export interface Purchase {
  _id?: string;
  product: Product;
  quantity: number;
  _userId: string;
  date?: Date;
  shippingDetails: ShippingDetails;
}
