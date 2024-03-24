'use client'

import { InputProps } from "./InputProps";
import cn from 'classnames';
import styles from './Input.module.css'
import { ForwardedRef, forwardRef } from "react";

// eslint-disable-next-line react/display-name
export const Input = forwardRef(({className,typeBtn='text', value, inputValue, ...props}: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  
  return (
      <input type={typeBtn} className={cn(className, styles.input)} placeholder={inputValue} required {...props} ref={ref} value={value} />
  )
})