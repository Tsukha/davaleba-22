import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../services/api";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await api.fetchTodos();
  return response;
});

export const createTodo = createAsyncThunk(
  "todos/createTodo",
  async (todoData) => {
    const response = await api.createTodo(todoData);
    return response;
  }
);

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async ({ id, updates }) => {
    const response = await api.updateTodo(id, updates);
    return response;
  }
);

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
  await api.deleteTodo(id);
  return id;
});
