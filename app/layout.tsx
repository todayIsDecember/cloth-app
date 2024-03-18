import type { Metadata } from "next";
import { open_Sans } from './ui/fonts'
import "./globals.css";
import { Footer, Header, Sidebar } from "./components";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "Головна",
  description: "салон тюлей та штор",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={open_Sans.className}>
        <div className={styles.wrapper}>
          <Header className={styles.header}/>
          <Sidebar className={styles.sidebar}/>
          <div className={styles.body}>{children}</div>
          <Footer className={styles.footer}/>
        </div>
      </body>
    </html>
  );
}
