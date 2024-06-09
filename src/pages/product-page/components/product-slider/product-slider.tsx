import { useState } from 'react';

import styles from './product-slider.module.css';

interface Props {
    images: Array<string>;
}

export const ProductSlider = ({ images }: Props) => {
    const [currentImage, setCurrentImage] = useState<number>(0);

    const onLeftButtonClick = () => {
        setCurrentImage((previousIndex) => (previousIndex ? --previousIndex : images.length - 1));
    };

    const onRightButtonClick = () => {
        setCurrentImage((previousIndex) => (previousIndex === images.length - 1 ? 0 : ++previousIndex));
    };

    return (
        <div className={styles['product-slider']}>
            <div className={styles['product-slider__images']}>
                {images.map((image, index) => (
                    <div key={`${image}-${index}`} onClick={() => setCurrentImage(index)} className={styles['product-slider__image']}>
                        <img src={image} alt="" />
                    </div>
                ))}
            </div>
            <div className={styles['product-slider__main']}>
                <button
                    onClick={onLeftButtonClick}
                    className={`${styles['product-slider__main_arrow']} ${styles['product-slider__main_arrow_left']}`}
                >
                    &lt;
                </button>
                <img src={images[currentImage]} alt="" />
                <button
                    onClick={onRightButtonClick}
                    className={`${styles['product-slider__main_arrow']} ${styles['product-slider__main_arrow_right']}`}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};
