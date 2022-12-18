import { useState } from 'react';
import { useHistory } from "react-router-dom";
import ToDoListDisplay from './ToDoListDisplay';

const ToDoList = ({ data }) => {
    const [todos, setTodos] = useState(data);
    const history = useHistory();

    const handleDelete = (id) => {
        fetch('http://localhost:8000/todos/'+id, {
            method: 'DELETE'
        }).then(() => {
            let newTodos = [];
            newTodos = todos.filter(todo => todo.id !== id);
            setTodos(newTodos);
            history.push('/');
        });
    }

    return (
        <div className="todo-container">
            <ToDoListDisplay 
                todos={todos} 
                handleDelete={handleDelete} 
            />
        </div>
    );
}
 
export default ToDoList;