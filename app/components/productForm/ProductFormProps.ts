import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IProduct } from "../../../interfaces/product.interface";

export interface ProductFormProps  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  product: IProduct
}