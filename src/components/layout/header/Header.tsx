import styles from "./Header.module.scss";
import Button from "@/components/ui/button/Button";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/atomicojs.svg"
          alt="logo"
          className={styles.logo}
          width={150}
          height={40}
        />
      </Link>
      <nav className={styles.nav}>
        <Link href="/series" className={styles.link}>
          Series
        </Link>
        <Link href="/series" className={styles.link}>
          Movies
        </Link>
        <a href="" className={styles.link}>
          Collections
        </a>
        <a href="" className={styles.link}>
          Search
        </a>
      </nav>

      <Button className={styles.button}>Login</Button>
    </header>
  );
};

export default Header;
