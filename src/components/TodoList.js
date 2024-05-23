import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItems";
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className='todo-list-container'>
      <h2>My ToDo List</h2>
      <TodoInput todos={todos} setTodos={setTodos} />
      <div className='todo-list-wrapper'>
        {todos.map((item, index) => {
          return (
            <TodoItem
              key={item.id}
              todo={item}
              index={index + 1}
              todos={todos}
              setTodos={setTodos}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
