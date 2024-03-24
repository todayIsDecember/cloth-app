'use client'

import { DropBoxProps } from "./DropBoxProps";
import cn from "classnames";
import styles from "./DropBox.module.css"
import {motion} from 'framer-motion'
import { ForwardedRef, forwardRef, useState } from "react";
import { Text } from "../text/Text";
import ArrowIcon from '../../../public/arrow.svg'

// eslint-disable-next-line react/display-name
export const DropBox = forwardRef(({value, elements, className, ...props}: DropBoxProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false)

    const [selectedValue , seSelectedValue] = useState(value)


    return (
        <div className={cn(className, styles.dropBox)} {...props} ref={ref}>
            <Text className={styles.title} onClick={() => setIsOpen(!isOpen)}>{selectedValue}</Text>
            <ArrowIcon className={cn(styles.arrow, {[styles.open]: isOpen})}/>
            <motion.div className={styles.list} layout>
                {isOpen && elements.map((element, index) => (
                    <div className={styles.element} key={index} onClick={() => {setIsOpen(!isOpen);
                        seSelectedValue(element)}}>{element}</div>
                ))}
            </motion.div>
        </div>
    )
})