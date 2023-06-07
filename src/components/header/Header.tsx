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
                        offset={0}
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
                        offset={0}
                        duration={500}
                    >
                        О нас
                    </Link>
                    <span className={s.link}>Каталог</span>
                    <span className={s.link}>Наши работы</span>
                    <span className={s.link}>Контакты</span>
                </nav>
            </div>
        </header>
    );
};

export default Header;