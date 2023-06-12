import React from 'react';
import s from './aboutUs.module.scss'

const AboutUs = () => {
    return (
        <div className={s.AboutUsBlock} id={"aboutProjects"}>
            <div className={s.AboutUsContainer}>
                <div className={s.imgContainer}>
                    <img className={s.img}/>
                </div>
                <div className={s.textContainer}>
                    <span className={s.backgroundTextTitle}>О нас</span>
                    <h2 className={s.textTitle}>Everything you dreamed</h2>
                    <h2 className={s.textTitle}>of in one gorgeous house!</h2>
                    <div className={s.textSecondContainer}>
                        <p className={s.textSecond}>The main house has 3 generously-sized bedrooms many of which are ensuite, a spacious dining
                            room
                            and large fully-equipped kitchen plus an entertainment room.</p>
                    </div>

                    <div className={s.selectedTextContainer}>
                        <p className={s.selectedText}>“ Architecture miracle lost in the mountains, surrounded by the purest sea.</p>

                    </div>
                </div>
            </div>
            <div className={s.backgroundElement}></div>
        </div>
    );
};

export default AboutUs;