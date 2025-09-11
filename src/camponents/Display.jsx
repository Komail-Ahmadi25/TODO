import { useState } from "react";

export default function Display({ todo, check, todos, setTodos }) {
    function handleChange(todo) {
        const newTodos = todos.map(todo => {
            return todo.compeleted === todo ? { ...todo, compeleted: !todo.compeleted } : todo;
        });
        setTodos(newTodos);
        console.log(todos)
    }
    return (
        <div className="w-[80%] border-b flex p-2 justify-between mt-4">
            <div className="w-[80%] text-2xl flex px-3">
                <input
                    type="checkbox" className="form-checkbox pl-4 h-3 w-3 my-4 text-green-400" />
                <h1 className="px-5" onClick={(todo) => handleChange(todo)}>{todo}</h1>
            </div>
            <i className="fas fa-trash my-3"></i>
        </div>
    );
}