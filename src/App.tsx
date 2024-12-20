import React, { useState } from "react";
import "./app-style.css"
import InputFeild from "./component/InputFeild";
import { Todo } from "./model"
import TodoList from "./component/Todolist";

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo){
      setTodos([...todos, { id: Date.now(), todo, isDone:false }]);
      setTodo("");
    }
  };

  return (
    <div className="app">
      <span className="heading">To Do</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
};

export default App;
