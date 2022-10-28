import React from 'react';
import Carousel from './Carousel/Carousel'
import s from './CarouselBox.module.css'
import {NavLink} from "react-router-dom";

function CarouselBox(props) {
    return (
        <div className={s.carouselBox}>
            <Carousel>
                <div className={s.item1}>
                    <div className={s.items}>
                        <h1>Запланируй свой день!</h1>
                        <NavLink to={'/todo'}>
                            <input className={s.button} type='button' value='Start'/>
                        </NavLink>
                    </div>
                </div>
                <div className={s.item2}>
                    <div className={s.items}>
                        <h1>Запланируй свой день!</h1>
                        <NavLink to={'/todo'}>
                            <input className={s.button} type='button' value='Start'/>
                        </NavLink>
                    </div>
                </div>
                <div className={s.item3}>
                    <div className={s.items}>
                        <h1>Запланируй свой день!</h1>
                        <NavLink to={'/todo'}>
                            <input className={s.button} type='button' value='Start'/>
                        </NavLink>
                    </div>
                </div>
            </Carousel>
        </div>

    )
}

export default CarouselBox;