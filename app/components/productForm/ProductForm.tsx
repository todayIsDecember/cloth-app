'use client'
import { ProductFormProps } from "./ProductFormProps";
import cn from 'classnames';
import styles from './ProductForm.module.css'
import { useForm } from 'react-hook-form'
import { IProductForm } from "../../../interfaces/productForm.interface";
import Image from 'next/image'
import { H } from "../h/H";
import { API } from "../../../helpers/api";
import { useEffect, useState } from "react";
import { getColors } from "../../API/getColors";
import { DropBox } from "../dropBox/DropBox";
import { Text } from "../text/Text";
import { Button } from "../button/Button";

export const ProductForm = ({className, product, ...props}: ProductFormProps): JSX.Element => {
  const {register, handleSubmit, reset, control} = useForm<IProductForm>();
  const [colors, setColors] = useState([])

  useEffect(() => {
    const colors = async () => {
      const data = await getColors(product.type)
      
      setColors(data)
    }

    colors()
    
  }, [product.type]);

  return (
    <form className={cn(className, styles.form)} {...props}>
      <div className={styles.image}>
        <Image src={`${API.image.get}/${product.photo}`} sizes="(100vw - 30px)" fill alt="image"></Image>
      </div>
      <div className={styles.info}>
        <H tag="h3" className={styles.name}>{product.name}</H>
        <Text className={styles.colorTitle}>Колір</Text>
        <DropBox className={styles.color} elements={colors} value={product.color}></DropBox>
        <Text className={styles.widthTitle}>Довжина</Text>
        <Text className={styles.heightTitle}>Висота</Text>
        <Text className={styles.isReady}>готовий продукт чи тільки матеріал?</Text>
        <Text className={styles.price}>ціна</Text>
        <Button appearance="black" size="m" type="buy" className={styles.button}>Підтвердити дані</Button>
      </div>
    </form>
  )
}