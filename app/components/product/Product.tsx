'use client'

import { ProductProps } from "./ProductProps";
import cn from 'classnames';
import styles from './Product.module.css'
import Image from 'next/image'
import { API } from "../../../helpers/api";
import { H, Button, Text, Modal } from "..";
import { useState } from "react";

export const Product = ({className, product, ...props}: ProductProps): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        document.body.classList.add('modal-open')
        setIsOpen(true)
    };
    const closeModal = () => {
        document.body.classList.remove('modal-open')
        setIsOpen(false)};
    return (
        <div className={cn(className, styles.product)} {...props}>
            <div className={styles.image}>
                <Image src={`${API.image.get}/${product.photo}`} sizes="(100vw - 30px)" fill alt="image"></Image>
            </div>
            <div className={styles.info}>
                <H tag="h2" className={styles.name}>{product.name}</H>
                <Text className={styles.description}>{product.description}</Text>
                <div className={styles.priceContainer}>
                    <div>{product.prices.price}грн / м</div>
                    <Button appearance="black" size="m" type="buy" onClick={openModal}>Купити</Button>
                </div>
            </div>
            <Modal isOpen={isOpen} onClose={closeModal} product={product}></Modal>
        </div>
    )
}