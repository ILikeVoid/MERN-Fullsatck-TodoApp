import React from 'react';
import s from "./Header.module.css"
import Navbar from "../Navbar/Navbar";
import todoIcon from "../../assets/images/Microsoft_To-Do_icon.png"

function Header() {
    return (
        <div className={s.header}>
            <div className={s.navbar}>
                <Navbar/>
            </div>
            <div className={s.icon}>
                <img className={s.logo} src={todoIcon}/>
            </div>
        </div>
    );
}

export default Header;