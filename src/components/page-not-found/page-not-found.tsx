import { EAppPage } from '@/constants/link-urls';

import { AppLink } from '../app-link';

import styles from './page-not-found.module.css';

export const PageNotFound = () => (
    <section className={styles['not-found']}>
        <h2 className={styles['not-found__title']}>404</h2>
        <AppLink page={EAppPage.ROOT} className={styles['not-found__link']}>
            Go to home
        </AppLink>
    </section>
);
