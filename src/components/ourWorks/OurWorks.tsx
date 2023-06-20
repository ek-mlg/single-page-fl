import React from 'react';
import s from './OurWorks.module.scss'
import { Gallery } from "react-grid-gallery";
import {images} from "../../projectsPhotos";

const OurWorks = () => {
    return (
        <div className={s.catalogBlock}>
            <div className={s.catalogContainer}>
                <div className={s.textContainer}>
                    <span className={s.backgroundTextTitle}>Больше фото</span>
                    <h2 className={s.textTitle}>Предлагаем ознакомиться</h2>
                    <h2 className={s.textTitle}>с нашими проектами</h2>
                </div>

                <div className={s.photosContainer}>
                    <Gallery images={images} rowHeight={320} enableImageSelection={false} />
                </div>
            </div>
        </div>
    );
};

export default OurWorks;