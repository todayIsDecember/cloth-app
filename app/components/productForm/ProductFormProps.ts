import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IProductForm } from "../../../interfaces/productForm.interface";

export interface ProductFormProps  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  // productValue: IProductForm
}