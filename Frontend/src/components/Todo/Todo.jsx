import React from 'react';
import s from './Todo.module.css'
import Items from "./Items/Items";


const Todo = ({todo, text, changeTodo, addTodo}) => {
    return (
        <div className={s.main}>
            <div>
                <input className={s.todo}
                       type='text'
                       placeholder='Что нового?'
                       value={text}
                       onChange={changeTodo}
                />
                <input className={s.button} onClick={addTodo} type='button' value='Save'/>
                {todo.map((item) => <Items key={item._id} todoText={item.text}/>)}
            </div>
        </div>
    );
}

export default Todo;