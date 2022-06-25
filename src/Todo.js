import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addTodo, removeTodo, clearTodos} from './features/todoSlice';

const Todo = () => {
    const items = useSelector((state) => state.todo.items)
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    
    const renderItems = items.map((item, index) => 
        <li key={index} onClick={() => dispatch(removeTodo(index))}>{item}</li>
    )

    const submitList = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
    }

    return (
        <div>
            <form onSubmit={(e) => submitList(e)}>
                <input type="text" onChange={(e) => setInput(e.target.value)}></input>
                <button type="submit">Submit</button>
            </form>
            <ul id="list">
                {renderItems}
            </ul>
            <button onClick={() => dispatch(clearTodos())}>Clear</button>
        </div>
    )
}
export default Todo