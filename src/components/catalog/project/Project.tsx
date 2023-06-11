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
    price: number
}

const Project:React.FC<ProjectPropsType> = ({img, alt, title, description, square, size, price}) => {

    return (
        <div className={s.projectContainer}>
            <img className={s.img} src={img} alt={alt}/>
            <p className={s.title}>{title}</p>
            <p className={s.description}>{description}</p>
            <div className={s.characteristicsContainer}>
                <div className={s.characteristics}>
                    <img src={squareIcon} alt={'Площадь'} className={s.characteristicsImg}/>
                    <p className={s.characteristicsTitle}>Square:</p>
                    <p className={s.characteristicsDescription}>{square}</p>
                </div>
                <div className={s.characteristics}>
                    <img src={sizeIcon} alt={'Размеры'} className={s.characteristicsImg}/>
                    <p className={s.characteristicsTitle}>Size:</p>
                    <p className={s.characteristicsDescription}>{size}</p>
                </div>
                <div className={s.characteristics}>
                    <img src={priceIcon} alt={'Цена'} className={s.characteristicsImg}/>
                    <p className={s.characteristicsTitle}>Price:</p>
                    <p className={s.characteristicsDescription}>{price}</p>
                </div>

            </div>
        </div>
    );
};

export default Project;