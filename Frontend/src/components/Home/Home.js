import React from 'react';
import CarouselBox from "./CarouselBox/CarouselBox";
import s from './Home.module.css'

function Home(props) {
    return (
        <div className={s.slider}>
            <CarouselBox />
        </div>
    );
}

export default Home;