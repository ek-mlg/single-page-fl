import React from 'react';
import s from './catalog.module.scss'
import Project from "./project/Project";
import {projectContent} from "../../data";

const Catalog = () => {
    return (
        <div className={s.catalogBlock} id={"catalog"}>
            <div className={s.catalogContainer}>
                <div className={s.textContainer}>
                    <span className={s.backgroundTextTitle}>Каталог</span>
                    <h2 className={s.textTitle}>Magnificent View and</h2>
                    <h2 className={s.textTitle}>Sunny Terraces</h2>
                </div>
                <div className={s.catalog}>
                    {projectContent.map(el => (<Project
                        key={el.id}
                        img={el.img}
                        alt={el.alt}
                        title={el.title}
                        description={el.description}
                        square={el.square}
                        size={el.size}
                        price={el.price}
                    />))}
                </div>
            </div>
        </div>
    );
};

export default Catalog;