'use client'

import { OrderFormProps } from "./OrderFormProps";
import cn from 'classnames';
import styles from './OrderForm.module.css';
import { useForm } from 'react-hook-form'
import { IOrderForm } from "../../../interfaces/orderForm.interface";
import { AutoComplit, Button, H, Input } from "..";
import { useState } from "react";
import { getAddresses } from "../../API/getAddresses";


export const OrderForm = ({className, ...props}: OrderFormProps): JSX.Element => {
  const [isDelivery, setIsDelivery] = useState<boolean>(false)
  const {register, handleSubmit, reset, control} = useForm<IOrderForm>()
  const [city, setCity] = useState<string>('')
  const [delivery, setDelivery] = useState<string>('')
  const [fullPrice, setFullPrice] = useState<number>(0)
  return (
    <form className={cn(className, styles.orderForm)} {...props} onSubmit={handleSubmit((data) => console.log(data))}>
      <div className={cn(styles.subForm, styles.contactForm)}>
        <H className={styles.title} tag="h3">Контактна інформація</H>
        <Input inputValue="ваше ім'я" {...register('customer_name')} typeBtn="text"/ >
        <Input inputValue="ваш телефон" typeBtn="tel" {...register('phone')}/>
      </div>
      <div className={cn(styles.subForm, styles.deliveryForm)}>
        <H tag="h3" className={styles.title}>Доставка новою поштою</H>
        <label className={cn(styles.switch, styles.switchStatus)}>
            <input type="checkbox" checked={isDelivery} {...register('usedelivery')} onChange={() => setIsDelivery(!isDelivery)}/>
            <span className={styles.slider}></span>
        </label>
        {isDelivery &&
          <div className={styles.delivery}>
            <AutoComplit type="населений пункт" getResponse={getAddresses} onSave={(value) => setCity(value)}></AutoComplit>
            <AutoComplit type='відділення' getResponse={getAddresses} city={city} onSave={(value) => setDelivery(value)}></AutoComplit>
          </div>
        }
      </div>
      <H tag="h3" className={styles.fullPrice}>Загальна ціна: {fullPrice}</H>
      <Button appearance="black" size="m" className={styles.button}>Замовити</Button>
    </form>
  )
}