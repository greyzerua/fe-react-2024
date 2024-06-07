import { useState } from 'react';

import styles from './product-slider.module.css';

interface Props {
    images: Array<string>;
}

export const ProductSlider = ({ images }: Props) => {
    const [currentImage, setCurrentImage] = useState<string>(images[0]);

    return (
        <div className={styles['product-slider']}>
            <div className={styles['product-slider__images']}>
                {images.map((image, index) => (
                    <div key={`${image}-${index}`} onClick={() => setCurrentImage(image)} className={styles['product-slider__image']}>
                        <img src={image} alt="" />
                    </div>
                ))}
            </div>
            <div className={styles['product-slider__main']}>
                <img src={currentImage} alt="" />
            </div>
        </div>
    );
};
