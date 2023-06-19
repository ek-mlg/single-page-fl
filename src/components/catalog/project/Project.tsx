import React from 'react';
import s from './project.module.scss'
import squareIcon from '../../../assets/characteristicsSVG/icons8-square-64.png'
import sizeIcon from '../../../assets/characteristicsSVG/icons8-size-64.png'
import priceIcon from '../../../assets/characteristicsSVG/icons8-price-64.png'

type ProjectPropsType = {
    img: string,
    alt: string
    title: string,
    description: string,
    square: number,
    size: string,
    price: number,
    priceSecond : string | undefined
}

const Project:React.FC<ProjectPropsType> = ({img, alt, title, description, square, size, price, priceSecond}) => {

    return (
        <div className={s.projectContainer}>
            <img className={s.img} src={img} alt={alt}/>
            <p className={s.title}>{title}</p>
            <p className={s.description}>{description}</p>
            <div className={s.characteristicsContainer}>
                <div className={s.characteristics}>
                    <img src={squareIcon} alt={'Площадь'} className={s.characteristicsImg}/>
                    <p className={s.characteristicsTitle}>Площадь:</p>
                    <p className={s.characteristicsDescription}>{square} м²</p>
                </div>
                <div className={s.characteristics}>
                    <img src={sizeIcon} alt={'Размеры'} className={s.characteristicsImg}/>
                    <p className={s.characteristicsTitle}>Размеры:</p>
                    <p className={s.characteristicsDescription}>{size} м</p>
                </div>
                <div className={s.characteristics}>
                    <img src={priceIcon} alt={'Цена'} className={s.characteristicsImg}/>
                    <p className={s.characteristicsTitle}>Цена от:</p>
                    <p className={s.characteristicsDescription}>{price} <span>{priceSecond} ₽</span></p>
                </div>

            </div>
        </div>
    );
};

export default Project;