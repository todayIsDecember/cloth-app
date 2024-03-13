import { ProductProps } from "./ProductProps";
import cn from 'classnames';
import styles from './Product.module.css'
import Image from 'next/image'
import { API } from "../../../helpers/api";
import { Button } from "../button/Button";

export const Product = ({className, product, ...props}: ProductProps): JSX.Element => {
    return (
        <div className={cn(className, styles.product)}>
            <div className={styles.image}>
                <Image src={`${API.image.get}/${product.photo}`} fill alt="image"></Image>
            </div>
            <div className={styles.info}>
                <p className={styles.name}>{product.name}</p>
                <p className={styles.description}>{product.description}</p>
                <div className={styles.priceContainer}>
                    <div>{product.prices.price}грн / м</div>
                    <Button appearance="black" size="m">Купити</Button>
                </div>
            </div>
        </div>
    )
}