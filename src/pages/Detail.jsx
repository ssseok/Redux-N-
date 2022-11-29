import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Detail() {
  const toDos = useSelector((state) => state);
  const { id } = useParams();
  const todoText = toDos.find((todo) => todo.id === parseInt(id));
  console.log(todoText.id);
  console.log(todoText.text);
  return (
    <>
      {todoText?.text}
      Created at:{todoText?.id}
    </>
  );
}
