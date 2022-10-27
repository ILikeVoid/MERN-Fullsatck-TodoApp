import React from 'react';
import s from "./Items.module.css"
import pencil from "../../../assets/images/pencil-line.png"
import deleteIcon from "../../../assets/images/close-circle-line.png"

function Items({key, todoText}){
    return (
        <div className={s.item}>
            <div className={s.text}>{todoText}</div>
            <div className={s.icons}>
                <i><img src={pencil}/></i>
                <i><img src={deleteIcon}/></i>
            </div>
        </div>
    );
}

export default Items;