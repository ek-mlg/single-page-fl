import React from 'react';
import s from './OurWorks.module.scss'
const OurWorks = () => {
    return (
        <div className={s.catalogBlock} id={"ourWorks"}>
            <div className={s.catalogContainer}>
                <div className={s.textContainer}>
                    <span className={s.backgroundTextTitle}>More photos</span>
                    <h2 className={s.textTitle}>Villa interior and exterior is</h2>
                    <h2 className={s.textTitle}>perfectly coupled with</h2>
                    <h2 className={s.textTitle}>wild nature and the sea</h2>
                </div>

                <div className={s.photosContainer}>

                </div>
            </div>
        </div>
    );
};

export default OurWorks;