import { InputProps } from "./InputProps";
import cn from 'classnames';
import styles from './Input.module.css'
import { ForwardedRef, forwardRef } from "react";

// eslint-disable-next-line react/display-name
export const Input = forwardRef(({className, value, ...props}: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  return (
      <input type="text" className={styles.input} placeholder={value} required {...props} ref={ref}/>
  )
})