import facebook from '@/assets/fb.svg';
import instagram from '@/assets/instagram.svg';
import linkedin from '@/assets/linkedin.svg';

import { WidthContainer } from '../width-container';

import styles from './footer.module.css';

export const Footer = () => (
    <footer>
        <WidthContainer>
            <div className={styles['footer__inner']}>
                <div className={styles['footer__social-media']}>
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/master.of.code.team/">
                                <img src={facebook} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/master-of-code/">
                                <img src={linkedin} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/master.of.code.team/" target="blank">
                                <img src={instagram} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
                <p>
                    Made with 💗 on course&nbsp;
                    <a href="https://www.mastersacademy.education/frontend-react-it" target="blank">
                        &apos;Intro to React&apos; from Masters Academy in 2024
                    </a>
                    &nbsp; by Serhii Shevchenko
                </p>
            </div>
        </WidthContainer>
    </footer>
);
