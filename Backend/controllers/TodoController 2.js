const TodoModel = require('../models/TodoModel')

module.exports.getTodo = async (req, res) => {
    const todo = await TodoModel.find()
    res.send(todo)
}

module.exports.saveTodo = async (req, res) => {
    const { text } = req.body

    TodoModel
        .create({text})
        .then((data) => {
            console.log("Added Successfully...")
            console.log(data)
            res.send(data)
        })
}

module.exports.updateTodo = (req, res) => {
    const {_id, text} = req.body

    TodoModel
    .findByIdAndUpdate(_id, {text})
    .then(() => res.send("Update Successfully..."))
    .catch((err) => console.log(err))
}

module.exports.deleteTodo = (req, res) => {
    const {_id } = req.body

    TodoModel
    .findByIdAndDelete(_id)
    .then(() => res.send("Delete Successfully..."))
    .catch((err) => console.log(err))
}
