import React from 'react';
import s from './contacts.module.scss'

const Contacts = () => {
    return (
        <div className={s.contactsBlock} id={"contacts"}>
            <div className={s.contactsContainer}>
                <div className={s.textContainer}>
                    <span className={s.backgroundTextTitle}>Контакты</span>
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
                    <div className={s.map}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6058.453327106249!2d38.26467485740552!3d55.42572960636618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1686587012331!5m2!1sru!2sru"
                            width="565"
                            height="445"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        >
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;