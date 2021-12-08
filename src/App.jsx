import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [imcompleteTodos, setImcompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  // TEXT BOX の更新イベント
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // Add Button method
  const onClickAdd = () => {
    if (todoText !== "") {
      const newTodo = [...imcompleteTodos, todoText];
      setImcompleteTodos(newTodo);
      setTodoText("");
    }
  };

  //Delete Button method
  const onClickDelete = (index) => {
    const newTodos = [...imcompleteTodos];
    newTodos.splice(index, 1);
    setImcompleteTodos(newTodos);
  };

  // Complete Button methoid
  const onClickComplete = (index) => {
    // 未完了のタスク削除
    const newTodos = [...imcompleteTodos];
    const targetTodo = newTodos.splice(index, 1);
    setImcompleteTodos(newTodos);
    // 完了のタスク追加
    const newCompTodos = [...completeTodos, targetTodo[0]];
    setCompleteTodos(newCompTodos);
  };

  const onClickBack = (index) => {
    // 完了のタスク削除
    const newCompTodos = [...completeTodos];
    const backTarget = newCompTodos.splice(index, 1);
    setCompleteTodos(newCompTodos);
    const newImcompTodos = [...imcompleteTodos, backTarget[0]];
    setImcompleteTodos(newImcompTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={imcompleteTodos.length >= 5}
      />
      {imcompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるTODOは５個までです。</p>
      )}

      <IncompleteTodos
        todos={imcompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos tools={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
