import axios from "axios";

const baseURL = 'http://localhost:5005'

export const todosAPI = {
    getTodos(setTodo){
        axios.get(baseURL).then(({data}) => {
            console.log('data ---> ', data)
            setTodo(data)
        })
    },
    saveTodos(text, setText, setTodo){
        axios.post(`${baseURL}/save`, {text})
            .then(data => {
                console.log(data)
                setText("")
                this.getTodos(setTodo)
            })
    },
}