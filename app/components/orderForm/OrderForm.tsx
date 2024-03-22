'use client'

import { OrderFormProps } from "./OrderFormProps";
import cn from 'classnames';
import styles from './OrderForm.module.css';
import { useForm } from 'react-hook-form'
import { IOrderForm } from "../../../interfaces/orderForm.interface";
import { H, Input } from "..";
import { useState } from "react";


export const OrderForm = ({className, ...props}: OrderFormProps): JSX.Element => {
  const [isDelivery, setIsDelivery] = useState<boolean>(false)
  const {register, handleSubmit, reset, control} = useForm<IOrderForm>()
  return (
    <form className={cn(className, styles.orderForm)} {...props}>
      <div className={styles.contactForm}>
        <H tag="h3">Контактна інформація</H>
        <Input value="ваше ім'я" {...register('customer_name')} typeBtn="text"/ >
        <Input value="ваш телефон" typeBtn="tel" {...register('phone')}/>
      </div>
      <div className={styles.deliveryForm}>
        <H tag="h3">Доставка новою поштою</H>
        <label className={cn(styles.switch, styles.switchStatus)}>
            <input type="checkbox" checked={isDelivery} onChange={() => setIsDelivery(!isDelivery)}/>
            <span className={styles.slider}></span>
        </label>
        {isDelivery && 
          <div className={styles.delivery}>
            <Input value="адреса доставки" typeBtn="text" {...register('city')}/>
          </div>
        }
      </div>
    </form>
  )
}