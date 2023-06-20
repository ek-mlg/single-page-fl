import React from 'react';
import s from './header.module.scss'
import {Link} from "react-scroll";
import logo from '../../assets/characteristicsSVG/logo.png'
import {useWindowSize} from "../../useWindowSize";
import Links from './links/Links';
import Burger from "./burger/Burger";

const Header = () => {

    const size = useWindowSize()

    return (
        <header className={s.headerContainer}>
            <div className={s.headerSection}>
                <Link
                    className={s.locoContainer}
                    activeClass={s.active}
                    to="main"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-80}
                    duration={500}
                >
                    <img alt={"Логотип"} className={s.logo} src={logo}/>
                    <p className={s.text}>Дачные <span className={s.textSecond}>Беседки</span></p>
                </Link>
                {size > 1340
                    ?
                    <Links/>
                    :
                    <Burger/>
                }
            </div>
        </header>
    );
};

export default Header;