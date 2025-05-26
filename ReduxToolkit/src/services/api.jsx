export const fetchTodos = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      const saved = JSON.parse(localStorage.getItem("todos") || "[]");
      resolve(saved);
    }, 500);
  });

export const createTodo = (todo) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const todos = JSON.parse(localStorage.getItem("todos") || "[]");
      const newTodo = {
        ...todo,
        id: Date.now(),
        createdAt: new Date().toISOString(),
      };
      todos.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(todos));
      resolve(newTodo);
    }, 300);
  });

export const updateTodo = (id, updates) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const todos = JSON.parse(localStorage.getItem("todos") || "[]");
      const index = todos.findIndex((t) => t.id === id);
      if (index !== -1) {
        todos[index] = { ...todos[index], ...updates };
        localStorage.setItem("todos", JSON.stringify(todos));
        resolve(todos[index]);
      }
    }, 300);
  });

export const deleteTodo = (id) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const todos = JSON.parse(localStorage.getItem("todos") || "[]");
      const filtered = todos.filter((t) => t.id !== id);
      localStorage.setItem("todos", JSON.stringify(filtered));
      resolve(id);
    }, 300);
  });
