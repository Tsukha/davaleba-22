import React from "react";
import { useSelector } from "react-redux";

const TodoStats = () => {
  const todos = useSelector((state) => state.todos.items);

  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const pendingTodos = totalTodos - completedTodos;

  return (
    <div className="stats-grid">
      <div className="stat-card total">
        <div className="stat-number total">{totalTodos}</div>
        <div className="stat-label">Total</div>
      </div>
      <div className="stat-card completed">
        <div className="stat-number completed">{completedTodos}</div>
        <div className="stat-label">Completed</div>
      </div>
      <div className="stat-card pending">
        <div className="stat-number pending">{pendingTodos}</div>
        <div className="stat-label">Pending</div>
      </div>
    </div>
  );
};

export default TodoStats;
