import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteToDo } from "../store";

export default function Todo({ todo, id }) {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(deleteToDo(id));
  };
  return (
    <li>
      <Link to={`/${id}`}>
        {todo.text}
        <button onClick={onClick}>❌</button>
      </Link>
    </li>
  );
}
