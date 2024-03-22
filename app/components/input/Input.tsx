'use client'

import { InputProps } from "./InputProps";
import cn from 'classnames';
import styles from './Input.module.css'
import { ForwardedRef, forwardRef, useState } from "react";
import {templateParser, parseDigit, templateFormatter} from 'input-format'
import ReactInput from 'input-format/react'

// eslint-disable-next-line react/display-name
export const Input = forwardRef(({className,typeBtn='text', value, ...props}: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  const [phoneNumber, setPhoneNumber] = useState()
  const TEMPLATE = '(xxx) xx-xx-xxx'
  const parser = templateParser(TEMPLATE, parseDigit)
  const  formater  =  templateFormatter(TEMPLATE)
  if(typeBtn == 'tel') {
    return(
    <ReactInput
      value={phoneNumber}
      onChange={(value) => setPhoneNumber(value)}
      parse={parser}
      format={formater}
      placeholder={value}
      className={cn(className, styles.input)}
    />
    )
  }
  else {
  return (
      <input type={typeBtn} className={cn(className, styles.input)} placeholder={value} required {...props} ref={ref}/>
  )}
})