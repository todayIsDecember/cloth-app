import { DetailedHTMLProps, HTMLAttributes } from "react"
import { IProduct } from "../../../interfaces/product.interface"

export interface ModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isOpen: boolean
  onClose: () => void
  product: IProduct
}