import React from 'react';
import s from './mainPhoto.module.scss'

const MainPhoto = () => {
    return (
        <div className={s.mainContainer} id={"main"}>
            <div className={s.textContainer}>
                <h1 className={s.textTitle}>Строительство</h1>
                <h1 className={s.textTitle}>Беседеок</h1>
                <h4 className={s.textSecond}>за один день, под ключ, с гарантией</h4>
            </div>
        </div>
    );
};

export default MainPhoto;