'use client'

import { ModalProps } from "./ModalProps";
import cn from 'classnames';
import styles from './Modal.module.css'
import { Button, OrderForm, Product, ProductForm } from "..";
import { useEffect, useState } from "react";

export const Modal = ({product, className, isOpen, onClose, ...props}: ModalProps) => {
  if(!isOpen) return null
  return (
    <div className={cn(className, styles.modal)} {...props}>
            <ProductForm product={product}></ProductForm>
            <OrderForm className={styles.orderForm}></OrderForm>
    </div>
  )
}