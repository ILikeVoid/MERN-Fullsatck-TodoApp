import React, {useEffect, useState} from 'react';
import Todo from "./Todo";
import {todosAPI} from "../../api/api";

const TodoContainer = () => {
    const [todo, setTodo] = useState([])
    const [text, setText] = useState("")

    useEffect(() => {
        todosAPI.getTodos(setTodo)
    }, [])

    const changeTodo = (e) => setText(e.target.value)
    const addTodo = () => todosAPI.saveTodos(text, setText, setTodo)


    return (
        <Todo todo={todo} text={text} changeTodo={changeTodo} addTodo={addTodo}/>
    )
}

export default TodoContainer;