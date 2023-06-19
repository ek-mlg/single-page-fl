import React from 'react';
import s from './aboutProjects.module.scss'
import {Link} from "react-scroll";
import project from '../../assets/catalogPhotos/project3.jpg'

const AboutProjects = () => {
    return (
        <div className={s.AboutProjectsBlock}>
            <div className={s.AboutProjectsContainer}>
                <div className={s.textContainer}>
                    <span className={s.backgroundTextTitle}>Проекты</span>
                    <h2 className={s.textTitle}>Ваш комфорт</h2>
                    <h2 className={s.textTitle}>– наш главный приоритет.</h2>
                    <div className={s.textSecondContainerFirst}>
                        <p className={s.textSecond}>Предлогаем Вашему внимаю ассортимент проектов, которые подходят для любых потребностей. Используем только лучшие материалы:
                            профилированная доска 135х45 мм., мини брус 135х60 мм., клееный брус 135х75 мм.</p>
                    </div>
                    <div className={s.textSecondContainerSecondary}>
                        <p className={s.textSecond}>Гарантируем качество и надежность всех наших проектов.</p>

                    </div>
                    <Link
                        className={s.link}
                        activeClass={s.active}
                        to="catalog"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={-80}
                        duration={500}
                    >
                        <span className={s.read} data-content="Подробнее ..." aria-hidden="true"></span>
                        Подробнее ...
                    </Link>

                </div>

                <div className={s.imgContainer}>
                    <img className={s.img} alt={'Пример проекта'} src={project}/>
                    <p className={s.imgText}>Пример проекта – <span className={s.imgTextColor}>Беседка №1</span></p>
                </div>
                <div className={s.backgroundElement}></div>
            </div>
        </div>
    );
};

export default AboutProjects;