import React from 'react';
import s from './footer.module.scss'

const Footer = () => {
    const date = new Date()
    const yearDate = date.getFullYear()

    return (
        <footer className={s.footerBlock}>
            <div className={s.footerContainer}>
                <p className={s.footerText}>{yearDate} Дачные беседки ©. Все права защищены.</p>
            </div>
        </footer>
    );
};

export default Footer;