import React from "react";

export const CompleteTodos = (props) => {
  const { tools, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {tools.map((todo2, index) => {
          return (
            <li key="todo2">
              <div className="list-row">
                <p>{todo2}</p>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
