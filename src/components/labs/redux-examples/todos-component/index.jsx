import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Todos = () => {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const [todo, setTodo] = useState({ do: "", done: false });

  const todoChangeHandler = (event) => {
    const doValue = event.target.value;
    const newTodo = {
      do: doValue,
      done: false,
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

  const updateTodoHandler = (todo) => {
    const action = {
      type: "update-todo",
      todo,
    };
    dispatch(action);
  };

  const deleteTodoHandler = (todoToDelete) => {
    const action = {
      type: "delete-todo",
      todo: todoToDelete,
    };

    dispatch(action);
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
              <input
                checked={todo.done}
                onChange={(event) =>
                  updateTodoHandler({
                    ...todo,
                    done: event.target.checked,
                  })
                }
                type="checkbox"
              />
              {todo.do}
              <button
                onClick={() => deleteTodoHandler(todo)}
                className="btn btn-danger float-end"
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Todos;
