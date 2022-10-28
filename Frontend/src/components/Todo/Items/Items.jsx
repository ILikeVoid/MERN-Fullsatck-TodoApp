import React from 'react';
import s from "./Items.module.css"
import pencil from "../../../assets/images/pencil-line.png"
import deleteIcon from "../../../assets/images/close-circle-line.png"

function Items({todoText, updateMode, deleteTodo}){
    return (
        <div className={s.item}>
            <div className={s.text}>{todoText}</div>
            <div className={s.icons}>
                <i><img src={pencil} onClick={updateMode}/></i>
                <i><img src={deleteIcon} onClick={deleteTodo}/></i>
            </div>
        </div>
    );
}

export default Items;