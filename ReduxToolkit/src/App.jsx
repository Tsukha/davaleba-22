import React, { useEffect } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "./store";
import { fetchTodos } from "./store/todoThunks";
import { clearError } from "./store/todoSlice";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoStats from "./components/TodoStats";
import TodoList from "./components/TodoList";

const TodoApp = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.todos);
  const isDark = useSelector((state) => state.theme.isDark);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        dispatch(clearError());
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error, dispatch]);

  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className="app-container">
      <div className="container">
        <Header />

        {error && (
          <div className="error-container">
            <p className="error-text">Error: {error}</p>
          </div>
        )}

        <AddTodo />
        <TodoStats />
        <TodoList />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
};

export default App;
