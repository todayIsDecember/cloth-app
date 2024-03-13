import { FooterProps } from "./Footer.props";
import cn from "classnames";
import styles from "./Footer.module.css";
import TelegramIcon from '../../../public/telegram.svg'
import ViberIcon from '../../../public/viber.svg'

export const Footer = ({className, ...props}: FooterProps):JSX.Element => {
    return (
        <footer className={cn(className, styles.footer)} {...props}>
            <p className={styles.title}>Консультація</p>
            <div className={styles.icons}>
                <TelegramIcon className={styles.icon}/>
                <ViberIcon className={styles.icon}/>
            </div>
        </footer>
    )
}