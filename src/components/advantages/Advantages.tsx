import React from 'react';
import s from './advantages.module.scss'
import {advantageContent} from "../../data";
import Advantage from "./advantage/Advantage";

const Advantages = () => {
    return (
        <div className={s.advantagesBlock}>
            <div className={s.advantagesContainer}>
                <div className={s.textContainer}>
                    <span className={s.backgroundTextTitle}>Преимущества</span>
                    <h2 className={s.textTitle}>Выбор нашей компании - гарантия</h2>
                    <h2 className={s.textTitle}>качественного строительства</h2>
                </div>

                <div className={s.section}>
                    {advantageContent.map(el => (<Advantage
                        key={el.id}
                        img={el.img}
                        title={el.title}
                        description={el.description}
                        alt={el.alt}
                    />))}
                </div>
            </div>
        </div>
    );
};

export default Advantages;