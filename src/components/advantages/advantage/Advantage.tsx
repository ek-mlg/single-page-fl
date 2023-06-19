import React from 'react';
import s from './advantage.module.scss'

type AdvantagePropsType = {
    img: string,
    title: string,
    description: string,
    alt: string
}

const Advantage:React.FC<AdvantagePropsType> = ({img, title, description, alt}) => {

    return (
        <div>
            <div className={s.advantagesSection}>
                <img className={s.img} src={img} alt={alt}/>
                <p className={s.title}>{title}</p>
                <p className={s.description}>{description}</p>
            </div>
        </div>
    );
};

export default Advantage;