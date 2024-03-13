import { SidebarProps } from "./Sidebar.props";
import cn from "classnames";
import styles from "./Sidebar.module.css";
import Link from 'next/link'
import { LinkCustom } from "..";

export const Sidebar = ({className, ...props}: SidebarProps): JSX.Element => {
    return (
    <div className={cn(className, styles.sidebar)} {...props}>
        <Link href={'/'} className={styles.link}><LinkCustom isActive>Головна</LinkCustom></Link>
        <Link href={'/'} className={styles.link}><LinkCustom>Каталог</LinkCustom></Link>
        <Link href={'/'} className={styles.link}><LinkCustom>Відгуки</LinkCustom></Link>
    </div>
    );
}