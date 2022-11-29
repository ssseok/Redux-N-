import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Todo from "../components/Todo";
import { addToDo } from "../store";

export default function Home() {
  const [text, setText] = useState("");
  const todo = useSelector((state) => state);
  const dispatch = useDispatch();
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    dispatch(addToDo(text));
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {todo.map((todo) => (
          <Todo todo={todo} key={todo?.id} id={todo.id} />
        ))}
      </ul>
    </>
  );
}
