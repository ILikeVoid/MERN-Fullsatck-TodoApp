import React from 'react';
import s from './Todo.module.css'
import Items from "./Items/Items";


const Todo = ({todo, text, isUpdating, changeTodo, addTodo, updatingTodo, updateMode, deleteTodo, setTodo}) => {
    return (
        <div className={s.main}>
            <div>
                <input className={s.todo}
                       type='text'
                       placeholder='Что нового?'
                       value={text}
                       onChange={changeTodo}
                />
                <input className={s.button}
                       onClick={isUpdating ?  updatingTodo : addTodo}
                       type='button' value={isUpdating ? "update" : "save"}/>
                {todo.map((item) => <Items
                    key={item._id}
                    todoText={item.text}
                    updateMode={() => updateMode(item._id, item.text)}
                    deleteTodo={() => deleteTodo(item._id, setTodo)}
                />)}
            </div>
        </div>
    );
}

export default Todo;