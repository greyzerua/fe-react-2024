import facebook from '@/assets/fb.svg';
import instagram from '@/assets/instagram.svg';
import linkedin from '@/assets/linkedin.svg';

import { WidthContainer } from '../width-container';

import styles from './footer.module.css';

const socialLinkClassName = styles['footer__social-media__link'];

export const Footer = () => (
    <footer>
        <WidthContainer>
            <div className={styles['footer__inner']}>
                <div className={styles['footer__social-media']}>
                    <ul className={styles['footer__social-media__list']}>
                        <li>
                            <a href="https://www.facebook.com/master.of.code.team/" className={socialLinkClassName}>
                                <img src={facebook} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/master-of-code/" className={socialLinkClassName}>
                                <img src={linkedin} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/master.of.code.team/" target="blank" className={socialLinkClassName}>
                                <img src={instagram} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
                <p className={styles['footer__desc']}>
                    Made with 💗 on course&nbsp;
                    <a
                        href="https://www.mastersacademy.education/frontend-react-it"
                        target="blank"
                        className={styles['footer__inner__link']}
                    >
                        <span>&apos;Intro to React&apos; from Masters Academy in 2024</span>
                    </a>
                    &nbsp; by Serhii Shevchenko
                </p>
            </div>
        </WidthContainer>
    </footer>
);
