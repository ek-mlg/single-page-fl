import React from 'react';
import s from './desktopLinks.module.scss';
import {Link} from "react-scroll";

const DesktopLinks = () => {
    return (
        <nav className={s.nav}>
            <Link
                className={s.link}
                activeClass={s.active}
                to="main"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-80}
                duration={500}
            >
                Главная
            </Link>
            <Link
                className={s.link}
                activeClass={s.active}
                to="aboutProjects"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-80}
                duration={500}
            >
                О нас
            </Link>
            <Link
                className={s.link}
                activeClass={s.active}
                to="ourWorks"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-80}
                duration={500}
            >
                Наши работы
            </Link>
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
                Каталог
            </Link>
            <Link
                className={s.link}
                activeClass={s.active}
                to="contacts"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-80}
                duration={500}
            >
                Контакты
            </Link>
        </nav>
    );
};

export default DesktopLinks;