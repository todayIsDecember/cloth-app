import { ButtonProps } from "./ButtonProps";
import cn from 'classnames';
import styles from './Butoon.module.css'

export const Button = ({children, appearance, size, type = 'button', className, ...props}: ButtonProps): JSX.Element => {
    return (
        <button className={cn(className, styles.button, {
            [styles.m] : size === 'm',
            [styles.l]: size === 'l',
            [styles.danger]: appearance === 'danger',
            [styles.black]: appearance === 'black',
        })}>{children}</button>
    )
}