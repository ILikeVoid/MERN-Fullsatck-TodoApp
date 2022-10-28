import React from 'react';
import s from './Title.module.css'

const Title = () => {
    return (
        <div className={s.main}>
            <div className={s.title}>
                <h1>Если задача поставлена в TodoApp — она будет сделана</h1>
                <p>Todoist – список дел и таск-менеджер № 1 в мире.
                    Он поможет вам обрести концентрацию, организованность и покой.
                </p>
                <div className={s.btn}>
                    <button>Начать</button>
                </div>
            </div>
        </div>
    );
}

export default Title;