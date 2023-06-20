import React from 'react';
import s from './desktopLinks.module.scss';
import {Link} from "react-scroll";

type LinksProps = {
    onClickHandler?: ()=> void
}

const Links:React.FC<LinksProps> = ({onClickHandler}) => {
    return (
        <nav className={s.nav}>
            <Link
                onClick={onClickHandler}
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
                onClick={onClickHandler}
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
                onClick={onClickHandler}
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
                onClick={onClickHandler}
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
                onClick={onClickHandler}
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

export default Links;