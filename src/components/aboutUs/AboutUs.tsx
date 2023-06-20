import React from 'react';
import s from './aboutUs.module.scss'
import aboutImage from '../../assets/projectsPhotos/image9.jpeg'

const AboutUs = () => {


    return (
        <div className={s.AboutUsBlock} id={"aboutProjects"}>
            <div className={s.AboutUsContainer}>
                <div className={s.imgContainer}>
                    <img className={s.img} src={aboutImage} alt={"Пример нашего проекта беседки"}/>
                </div>
                <div className={s.textContainer}>
                    <span className={s.backgroundTextTitle}>О нас</span>
                    <h2 className={s.textTitle}>Сопровождаем</h2>
                    <h2 className={s.textTitle}>на каждом этапе производства!</h2>
                    <div className={s.textSecondContainer}>
                        <p className={s.textSecond}>Мы гарантируем безупречное качество и надежность каждого нашего проекта.
                            В нашей команде работают - высококвалифицированные специалисты в области строительства. </p>
                    </div>

                    <div className={s.selectedTextContainer}>
                        <p className={s.selectedText}>“ Мы оссуществляем строительство беседок с 2015 года.</p>

                    </div>
                </div>
            </div>
            <div className={s.backgroundElement}></div>
        </div>
    );
};

export default AboutUs;