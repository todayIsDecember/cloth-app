'use client'
import { ProductFormProps } from "./ProductFormProps";
import cn from 'classnames';
import styles from './ProductForm.module.css'
import { useForm } from 'react-hook-form'
import { IProductForm } from "../../../interfaces/productForm.interface";
import { H } from "../h/H";

export const ProductForm = ({className, ...props}: ProductFormProps): JSX.Element => {
  const {register, handleSubmit, reset, control} = useForm<IProductForm>()
  return (
    <form className={cn(className, styles.orderForm)} {...props}>
    </form>
  )
}