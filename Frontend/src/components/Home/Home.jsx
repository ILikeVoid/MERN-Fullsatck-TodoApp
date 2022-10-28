import React from 'react';
import CarouselBox from "./CarouselBox/CarouselBox";
import s from './Home.module.css'
import Title from "./Title/Title";

function Home(props) {
    return (
        <div className={s.home}>
            <Title />
            <CarouselBox />
        </div>
    );
}

export default Home;