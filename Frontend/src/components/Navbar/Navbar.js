import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import homeIcon from '../../assets/images/home'
import todoIcon from '../../assets/images/todo'


function Navbar(props) {
    return (
        <div className={s.nav}>
            <div className={s.home}>
                <NavLink to='/home' className={s.item}>
                    <img src={homeIcon}/>
                    <div className={s.text}>Home</div>
                </NavLink>
            </div>
            <div className={s.todo}>
                <NavLink to='/todo' className={s.item}>
                    <img src={todoIcon}/>
                    <div className={s.text}>Todo</div>
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;