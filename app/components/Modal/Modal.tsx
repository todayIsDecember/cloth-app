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
        <div className={styles.content}>
            <OrderForm></OrderForm>
            <ProductForm></ProductForm>
        </div>
    </div>
  )
}