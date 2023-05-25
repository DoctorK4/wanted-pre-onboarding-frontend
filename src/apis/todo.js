import { toDoInstance } from "./axiosInstance";

export const toDoApi = {
  fetchTodo: async () => {
    const response = await toDoInstance.get('./todos');
    return response;
  },
  createTodo: async newTodo => {
    const response = await toDoInstance.post('./todos', {
      todo: newTodo,
      isCompleted: false,
    });
    return response;
  },
  deleteTodo: async todoId => {
    const response = await toDoInstance.delete(`./todos/${todoId}`);
    return response;
  },
  updateTodo: async (todoid, newTodo, todoisCompleted, ) => {
    const response = await toDoInstance.put(`./todos/${todoid}`, {
      todo: newTodo,
      isCompleted: todoisCompleted,
    });
    return response;
  },
};