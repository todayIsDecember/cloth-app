'use client'

import { SidebarProps } from "./Sidebar.props";
import cn from "classnames";
import styles from "./Sidebar.module.css";
import Link from 'next/link'
import { LinkCustom } from "..";
import {usePathname} from 'next/navigation'
import { useState } from "react";

export const Sidebar = ({className, ...props}: SidebarProps): JSX.Element => {

    const currentPath = usePathname()

    return (
    <div className={cn(className, styles.sidebar)} {...props}>
        <Link href={'/'} className={styles.link}><LinkCustom isActive={currentPath === '/'? true: false}>Головна</LinkCustom></Link>
        <Link href={'/catalog'} className={styles.link} ><LinkCustom isActive={currentPath === '/catalog'? true: false}>Каталог</LinkCustom></Link>
        <Link href={'/reviews'} className={styles.link}><LinkCustom isActive={currentPath === '/reviews'? true: false}>Відгуки</LinkCustom></Link>
    </div>
    );
}