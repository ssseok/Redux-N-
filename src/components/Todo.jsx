import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../store";

export default function Todo({ todo, id }) {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(remove(id));
  };
  return (
    <li>
      <Link to={`/${id}`}>{todo.text}</Link>
      <button onClick={onClick}>❌</button>
    </li>
  );
}
