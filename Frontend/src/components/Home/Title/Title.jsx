import React from 'react';
import s from './Title.module.css'

const Title = () => {
    return (
        <div className={s.main}>
            <div className={s.title}>
                <h1>Если задача поставлена в<br/>TodoApp — она будет <br/>сделана</h1>
                <button className={s.button}>Начать</button>
            </div>
        </div>
    );
}

export default Title;