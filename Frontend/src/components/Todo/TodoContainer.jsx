import React, {useEffect, useState} from 'react';
import Todo from "./Todo";
import {todosAPI} from "../../api/api";

const TodoContainer = () => {
    const [todo, setTodo] = useState([])
    const [text, setText] = useState("")
    const [isUpdating, setIsUpdating] = useState(false)
    const [todoId, setTodoId] = useState("")

    useEffect(() => {
        todosAPI.getTodos(setTodo)
    }, [])

    const changeTodo = (e) => setText(e.target.value)
    const addTodo = () => todosAPI.saveTodo(text, setText, setTodo)
    const updatingTodo = () => todosAPI.updateTodo(todoId, text, setTodo, setText, setIsUpdating)
    const updateMode = (_id, text) => {
        setIsUpdating(true)
        setText(text)
        setTodoId(_id)
    }


    return (
        <Todo todo={todo}
              text={text}
              isUpdating={isUpdating}
              changeTodo={changeTodo}
              addTodo={addTodo}
              updatingTodo={updatingTodo}
              updateMode={updateMode}
        />
    )
}

export default TodoContainer;