import React from 'react';
import s from './contacts.module.scss'

const Contacts = () => {
    return (
        <div className={s.contactsBlock} id={"contacts"}>
            <div className={s.contactsContainer}>
                <div className={s.textContainer}>
                    <span className={s.backgroundTextTitle}>Contact us</span>
                    <h2 className={s.textTitle}>Contact Us for any Details</h2>
                    <h2 className={s.textTitle}>and Additional Information</h2>
                    <p className={s.textSecond}>Please don’t hesitate to contact us for any details you are interested in. Our agents will gladly answer any of your questions.</p>
                    <address className={s.addressContainer}>
                        <a className={s.addressText} href={"tel:+7 (919) 016-17-63"}>Telephone: +7 (919) 016-17-63.</a>
                        <a className={s.addressText}>Email: ek.mlg@yandex.ru</a>
                        <a className={s.addressText}>Address: 153012, Ivanovo, Sadovaya, 43</a>
                    </address>
                </div>
                <div className={s.mapContainer}>
                    <div className={s.map}></div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;