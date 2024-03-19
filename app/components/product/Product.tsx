import { ProductProps } from "./ProductProps";
import cn from 'classnames';
import styles from './Product.module.css'
import Image from 'next/image'
import { API } from "../../../helpers/api";
import { H, Button, Text } from "..";

export const Product = ({className, product, ...props}: ProductProps): JSX.Element => {
    return (
        <div className={cn(className, styles.product)}>
            <div className={styles.image}>
                <Image src={`${API.image.get}/${product.photo}`} sizes="(100vw - 30px)" fill alt="image"></Image>
            </div>
            <div className={styles.info}>
                <H tag="h2" className={styles.name}>{product.name}</H>
                <Text className={styles.description}>{product.description}</Text>
                <div className={styles.priceContainer}>
                    <div>{product.prices.price}грн / м</div>
                    <Button appearance="black" size="m">Купити</Button>
                </div>
            </div>
        </div>
    )
}