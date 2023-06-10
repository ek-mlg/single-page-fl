import React from 'react';
import s from './mainPhoto.module.scss'
import ReactTypingEffect from "react-typing-effect";

const MainPhoto = () => {
    return (
        <div className={s.mainContainer} id={"main"}>
            <div className={s.textContainer}>
                <h1 className={s.textTitle}>Строительство</h1>
                <h1 className={s.textTitle}>Беседеок</h1>
                <ReactTypingEffect
                    className={s.textSecond}
                    staticText={"В Москве и области -"}
                    text={["за один день!", "под ключ!", "с гарантией!"]}
                    speed={100}
                    eraseDelay={5500}
                    typingDelay={250}
                />
            </div>
        </div>
    );
};

export default MainPhoto;