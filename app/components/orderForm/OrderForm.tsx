'use client'

import { OrderFormProps } from "./OrderFormProps";
import cn from 'classnames';
import styles from './OrderForm.module.css';
import { useForm } from 'react-hook-form'
import { IOrderForm } from "../../../interfaces/orderForm.interface";
import { H, Input } from "..";


export const OrderForm = ({className, ...props}: OrderFormProps): JSX.Element => {
  const {register, handleSubmit, reset, control} = useForm<IOrderForm>()
  return (
    <form className={cn(className, styles.orderForm)} {...props}>
      <div className={styles.contactForm}>
        <H tag="h3">Контактна інформація</H>
        <Input value="ваше ім'я" {...register('customer_name')} />
        <Input value="+380 (__) ___-__-__" typeBtn="tel"/>
      </div>
    </form>
  )
}