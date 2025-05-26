import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Plus } from "lucide-react";
import { createTodo } from "../store/todoThunks";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (text.trim()) {
      dispatch(
        createTodo({
          text: text.trim(),
          completed: false,
        })
      );
      setText("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Add a new task..."
        className="add-todo-input"
      />
      <button onClick={handleSubmit} className="add-todo-btn">
        <Plus size={18} />
        Add
      </button>
    </div>
  );
};

export default AddTodo;
