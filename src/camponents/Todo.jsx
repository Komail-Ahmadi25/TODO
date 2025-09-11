import { useState } from "react"
import Display from "./Display";
import Header from "./Header";
export default function Todo() {
    const [todo, setTodo] = useState({ todo: "", compeleted: false });
    const [todos, setTodos] = useState([]);
    function controlSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo = ({ todo: "", compeleted: false });
    }
    return (
        <div className="w-full">
            <Header />
            <div className="w-[50%] mx-auto ml-100  shadow-black bg-white ">
                <form onSubmit={controlSubmit}>
                    <input value={todo.todo} onChange={(e) => setTodo({ todo: e.target.value, compeleted: false })} type="text" placeholder="Add a new task..." className="mt-5 p-2 w-[70%] border border-blue-400 border-[1.9] focus:outline-blue-500 rounded-tl-2xl rounded-bl-2xl " />
                    <button className="font-semibold bg-blue-500 text-white rounded-tr-2xl rounded-br-2xl py-2 px-4">Add</button>
                </form>
                <div>
                    {todos.map((item) => (
                        <Display todo={item} check={item.compeleted} todos={todos} setTodos={setTodos} />
                    ))}
                </div>
            </div>
            <div className="bg-linear-60 from-sky-400 to-blue-500 absolute bottom-0 font-semibold text-xl p-5 text-white flex justify-between w-full">
                <div className="text-center">
                    <h1>All Tasks : {todos.length}</h1>
                </div>
                <div className="text-center">
                    <h1>Completed Tasks : 0</h1>
                </div>
            </div>
        </div>
    );
}