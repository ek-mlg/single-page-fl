import React from 'react';
import s from './catalog.module.scss'

const Catalog = () => {
    return (
        <div className={s.catalogBlock} id={"catalog"}>
            <div className={s.catalogContainer}>
                <div className={s.textContainer}>
                    <span className={s.backgroundTextTitle}>Catalog</span>
                    <h2 className={s.textTitle}>Magnificent View and</h2>
                    <h2 className={s.textTitle}>Sunny Terraces</h2>
                </div>
                <div className={s.catalog}>
                    <div className={s.project}></div>
                    <div className={s.project}></div>
                    <div className={s.project}></div>
                    <div className={s.project}></div>
                    <div className={s.project}></div>
                    <div className={s.project}></div>
                    <div className={s.project}></div>
                    <div className={s.project}></div>
                    <div className={s.project}></div>
                    <div className={s.project}></div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;