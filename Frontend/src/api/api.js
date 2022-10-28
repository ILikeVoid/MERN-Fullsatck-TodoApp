import axios from "axios";

const baseURL = 'http://localhost:5005'

export const todosAPI = {
    getTodos(setTodo) {
        axios.get(baseURL).then(({data}) => {
            console.log('data ---> ', data)
            setTodo(data)
        })
    },
    saveTodo(text, setText, setTodo) {
        axios.post(`${baseURL}/save`, {text})
            .then(data => {
                console.log(data)
                setText("")
                this.getTodos(setTodo)
            })
    },
    updateTodo(todoId, text, setTodo, setText, setIsUpdating) {
        axios.post(`${baseURL}/update`, {_id: todoId, text})
            .then(data => {
                setText("")
                setIsUpdating(false)
                this.getTodos(setTodo)
            })
            .catch(err => console.log(err))
    }
}