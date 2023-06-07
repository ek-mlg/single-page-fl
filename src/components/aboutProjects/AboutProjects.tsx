import React from 'react';
import s from './aboutProjects.module.scss'

const AboutProjects = () => {
    return (
        <div className={s.AboutProjectsBlock} id={"aboutProjects"}>
            <div className={s.AboutProjectsContainer}>
                <div className={s.textContainer}>
                    <span className={s.backgroundTextTitle}>Welcome</span>
                    <h2 className={s.textTitle}>Architecture</h2>
                    <h2 className={s.textTitle}>with people in mind.</h2>
                    <div className={s.textSecondContainerFirst}>
                        <p className={s.textSecond}>Surrounded by greenery, the villa opens directly onto a sunny
                            terrace with a fabulous heated outdoor swimming pool. The property is set in 2500m² of
                            grounds with a delightful variety of flowers and trees.</p>
                    </div>
                    <div className={s.textSecondContainerSecondary}>
                        <p className={s.textSecond}>Equipped with a top-of-the-range alarm system, the villa has
                            electric gates and private parking for up to 10 vehicles within the grounds. Ideal for use
                            as a luxury family residence.</p>
                    </div>
                    <span className={s.read}>Read More</span>
                </div>

                <div className={s.imgContainer}>
                    <img className={s.img}/>
                    <p className={s.imgText}>Sunny Terrace – <span className={s.imgTextColor}>Homeswort</span></p>
                </div>
                <div className={s.backgroundElement}></div>
            </div>
        </div>
    );
};

export default AboutProjects;