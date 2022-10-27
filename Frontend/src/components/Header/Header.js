import React from 'react';
import s from "./Header.module.css"
import Navbar from "../Navbar/Navbar";

function Header(props) {
    return (
        <div className={s.header}>
                <div className={s.icon}>
                    <img src='https://cdn-icons-png.flaticon.com/512/4697/4697260.png'/>
                </div>
            <div className={s.navbar}>
                <Navbar/>
            </div>
        </div>
    );
}

export default Header;