import { FC } from "react";
import styles from "./Breadcrumbs.module.scss";
import Link from "next/link";
import {IBreadcrumbsData} from '@/interfaces/breadcrumbs.interface';

const Breadcrumbs: FC<IBreadcrumbsData> = ({ breadcrumbs }) => {
  return (
    <div className={styles.breadcrumbs}>
      {breadcrumbs.map((crumb) => (
        <div key={crumb.name} className={styles.item}>
          <Link href={crumb.href} className={styles.link}>
            {crumb.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
