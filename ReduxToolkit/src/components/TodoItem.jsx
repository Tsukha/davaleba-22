import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Trash2, Edit2, Check, X } from "lucide-react";
import { updateTodo, deleteTodo } from "../store/todoThunks";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleToggleComplete = () => {
    dispatch(
      updateTodo({
        id: todo.id,
        updates: { completed: !todo.completed },
      })
    );
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditText(todo.text);
  };

  const handleSaveEdit = () => {
    if (editText.trim()) {
      dispatch(
        updateTodo({
          id: todo.id,
          updates: { text: editText.trim() },
        })
      );
      setIsEditing(false);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditText(todo.text);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSaveEdit();
    }
  };

  return (
    <div className="todo-item">
      <button
        onClick={handleToggleComplete}
        className={`todo-checkbox ${todo.completed ? "completed" : ""}`}
      >
        {todo.completed && <Check size={12} />}
      </button>

      {isEditing ? (
        <div className="todo-edit-container">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyPress={handleKeyPress}
            className="todo-edit-input"
            autoFocus
          />
          <button onClick={handleSaveEdit} className="todo-action-btn save">
            <Check size={16} />
          </button>
          <button onClick={handleCancelEdit} className="todo-action-btn cancel">
            <X size={16} />
          </button>
        </div>
      ) : (
        <>
          <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
            {todo.text}
          </span>
          <div className="todo-actions">
            <button onClick={handleEdit} className="todo-action-btn edit">
              <Edit2 size={16} />
            </button>
            <button onClick={handleDelete} className="todo-action-btn delete">
              <Trash2 size={16} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
