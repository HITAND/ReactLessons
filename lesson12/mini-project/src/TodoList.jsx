import React from "react";
import TasksList from "./TasksList.jsx";
import "./index.scss";

const TodoList = () => {
  return (
    <>
      <h1 className="title">TodoList</h1>
      <TasksList />
    </>
  );
};

export default TodoList;
