'use client'

import { InputProps } from "./InputProps";
import cn from 'classnames';
import styles from './Input.module.css'
import { ForwardedRef, forwardRef, useState } from "react";

// eslint-disable-next-line react/display-name
export const Input = forwardRef(({className,typeBtn='text', value, ...props}: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  const [phoneNumber, setPhoneNumber] = useState('+380');

  const handlePhoneNumberChange = (e) => {
    const inputValue = e.target.value;
    const formattedPhoneNumber = formatPhoneNumber(inputValue);
    setPhoneNumber(formattedPhoneNumber);
  };

  const formatPhoneNumber = (phoneNumber) => {
    // Видаляємо всі символи, крім цифр
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    // Форматуємо номер телефону
    let formattedNumber = '';
    if (cleaned.length > 0) {
      formattedNumber += '+380 ';
    }
    if (cleaned.length > 3) {
      formattedNumber += `(${cleaned.substr(3, 2)}) `;
    }
    if (cleaned.length > 5) {
      formattedNumber += `${cleaned.substr(5, 3)}-`;
    }
    if (cleaned.length > 8) {
      formattedNumber += `${cleaned.substr(8, 2)}-`;
    }
    if (cleaned.length > 10) {
      formattedNumber += cleaned.substr(10);
    }
    return formattedNumber;
  };
  if(typeBtn === 'tel') {
    return (
      <input
        type={typeBtn}
        className={cn(className, styles.input)}
        placeholder={value}
        required
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        {...props}
        ref={ref}
      />
    );
  }
  return (
      <input type={typeBtn} className={cn(className, styles.input)} placeholder={value} required {...props} ref={ref}/>
  )
})