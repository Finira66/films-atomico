import styles from './Footer.module.scss';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Image src="/atomicojs.svg" alt="logo" className={styles.logo} width={120} height={30} />
    </footer>
  )
}

export default Footer;