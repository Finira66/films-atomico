import styles from "./Button.module.scss";
import {FC, PropsWithChildren} from 'react';

interface ButtonProps {
  className?: string
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({ className, children }) => {
  return (
    <button className={`${className} ${styles.button}`}>{children}</button>
  );
};

export default Button;
