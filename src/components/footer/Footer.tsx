import React from 'react';
import s from './footer.module.scss'

const Footer = () => {
    return (
        <footer className={s.footerBlock}>
            <div className={s.footerContainer}>
                <p className={s.footerText}>Smooth website development laboratory ©. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;