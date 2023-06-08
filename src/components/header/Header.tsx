import React from 'react';
import s from './header.module.scss'
import {Link} from "react-scroll";

const Header = () => {
    return (
        <header className={s.headerContainer}>
            <div className={s.headerSection}>
                <img alt={"Логотип"} className={s.logo}/>
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
                    <span className={s.link}>Каталог</span>
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
            </div>
        </header>
    );
};

export default Header;