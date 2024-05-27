import { EXTERNAL_LINK_URLS } from '../../constants/link-urls';
import { EIconType } from '../icons';
import { Link } from '../link';
import { SocialIcon } from '../social-icon';
import { WidthContainer } from '../width-container';

import styles from './footer.module.css';

export const Footer = () => (
    <footer className={styles['footer']}>
        <WidthContainer>
            <div className={styles['footer__inner']}>
                <div className={styles['footer__social-media']}>
                    <ul className={styles['footer__social-media__list']}>
                        <li>
                            <SocialIcon href={EXTERNAL_LINK_URLS.FB} iconType={EIconType.FB} />
                        </li>
                        <li>
                            <SocialIcon href={EXTERNAL_LINK_URLS.INSTAGRAM} iconType={EIconType.INSTAGRAM} />
                        </li>
                        <li>
                            <SocialIcon href={EXTERNAL_LINK_URLS.LINKEDIN} iconType={EIconType.LINKEDIN} />
                        </li>
                    </ul>
                </div>
                <p className={styles['footer__desc']}>
                    Made with 💗 on course&nbsp;
                    <Link href={EXTERNAL_LINK_URLS.COURSE} className={styles['footer__inner__link']}>
                        <span>&apos;Intro to React&apos; from Masters Academy in 2024</span>
                    </Link>
                    &nbsp; by Serhii Shevchenko
                </p>
            </div>
        </WidthContainer>
    </footer>
);
