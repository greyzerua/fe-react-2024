import { IconType } from '../icons';
import { Link } from '../link';
import { SocialIcon } from '../social-icon';
import { WidthContainer } from '../width-container';

import styles from './footer.module.css';

export const Footer = () => (
    <footer>
        <WidthContainer>
            <div className={styles['footer__inner']}>
                <div className={styles['footer__social-media']}>
                    <ul className={styles['footer__social-media__list']}>
                        <li>
                            <SocialIcon href="https://www.facebook.com/master.of.code.team/" iconType={IconType.FB} />
                        </li>
                        <li>
                            <SocialIcon href="https://www.linkedin.com/company/master-of-code/" iconType={IconType.INSTAGRAM} />
                        </li>
                        <li>
                            <SocialIcon href="https://www.instagram.com/master.of.code.team/" iconType={IconType.LINKEDIN} />
                        </li>
                    </ul>
                </div>
                <p className={styles['footer__desc']}>
                    Made with 💗 on course&nbsp;
                    <Link href="https://www.mastersacademy.education/frontend-react-it" className={styles['footer__inner__link']}>
                        <span>&apos;Intro to React&apos; from Masters Academy in 2024</span>
                    </Link>
                    &nbsp; by Serhii Shevchenko
                </p>
            </div>
        </WidthContainer>
    </footer>
);
