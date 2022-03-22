import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Todos = () => {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const [todo, setTodo] = useState({ do: "" });

  const todoChangeHandler = (event) => {
    const doValue = event.target.value;
    const newTodo = {
      do: doValue,
    };
    setTodo(newTodo);
  };

  const createTodoHandler = () => {
    const action = {
      type: "create-todo",
      todo,
    };

    dispatch(action);

    setTodo({ do: "" });
  };

  return (
    <>
      <h3>Todos</h3>
      <ul className="list-group">
        <li className="list-group-item">
          <input
            onChange={todoChangeHandler}
            value={todo.do}
            className="form-control"
          />
          <button onClick={createTodoHandler} className="btn btn-primary">
            Create New Todo
          </button>
        </li>
        {todos &&
          todos.map((todo) => (
            <li key={todo._id} className="list-group-item">
              {todo.do}
            </li>
          ))}
      </ul>
    </>
  );
};

export default Todos;
