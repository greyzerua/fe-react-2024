import aboutImage from '@/assets/about-image.png';

import { Title } from '../../components/title';
import { WidthContainer } from '../../components/width-container';

import styles from './about-page.module.css';

const paragraphClassName = styles['about__inner-info_text'];
const linkClassName = styles['about__inner-info_link'];

export const AboutPage = () => (
    <section className={styles.about}>
        <WidthContainer>
            <div className={styles['about__inner']}>
                <div className={styles['about__inner-info']}>
                    <div className={styles['about__inner-title']}>
                        <Title />
                    </div>
                    <p className={paragraphClassName}>
                        Hi! My name is Serhii and I&apos;m a Junior Frontend Developer. I am already familiar with main Web Technologies
                        like React, HTML, CSS, JavaScript and Git version control system.
                    </p>
                    <p className={paragraphClassName}>
                        This page was developed during the course &apos;
                        <a href="https://www.mastersacademy.education/frontend-react-it" target="blank" className={linkClassName}>
                            Intro to React
                        </a>
                        &apos; from Masters Academy in 2024.
                    </p>
                    <p className={paragraphClassName}>
                        This is a social project from MOCG company where I got an opportunity to work with Frontend mentors and to create my
                        own small project for the portfolio.
                    </p>
                    <p className={paragraphClassName}>
                        You can contact me via&nbsp;
                        <a href="https://t.me/greyzerua" target="blank" className={linkClassName}>
                            telegram
                        </a>
                        &nbsp;and check out my&nbsp;
                        <a href="https://github.com/greyzerua" target="blank" className={linkClassName}>
                            GitHub
                        </a>
                        .
                    </p>
                </div>
                <div className={styles['about__inner-image']}>
                    <img className={styles['about__inner-image_photo']} src={aboutImage} alt="" />
                </div>
            </div>
        </WidthContainer>
    </section>
);
