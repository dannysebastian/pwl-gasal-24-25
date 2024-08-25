import axios from "axios";
import { useState } from "react";

const URL = "http://localhost:5000/todolist";

// Fungsi Hooks untuk pemanggilan endpoint
export const useCreateTodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoListDetail, setTodoListDetail] = useState([]);
  const [isUpdateSuccess, setIsUpdateSuccess] = useState(false);
  const [isDeleteSuccess, setIsDeleteSuccess] = useState(false);
  const [isCreateSuccess, setIsCreateSuccess] = useState(false);

  const getTodoList = async () => {
    try {
      // buat fungsi pemanggilan disini
    } catch (error) {
      console.error(error);
    }
  };

  const getTodoListById = async (id) => {
    try {
      // buat fungsi pemanggilan disini
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTodoListById = async (id) => {
    try {
      // buat fungsi pemanggilan disini
    } catch (error) {
      console.error(error);
    }
  };

  const updateTodoListById = async (param, id) => {
    try {
      // buat fungsi pemanggilan disini
    } catch (error) {
      console.error(error);
    }
  };

  const createTodoList = async (param) => {
    try {
      // buat fungsi pemanggilan disini
    } catch (error) {}
  };

  return {
    updateTodoListById,
    getTodoList,
    getTodoListById,
    createTodoList,
    deleteTodoListById,
    todoList,
    todoListDetail,
    isCreateSuccess,
    isDeleteSuccess,
    isUpdateSuccess,
  };
};
