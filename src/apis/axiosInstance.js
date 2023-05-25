import axios from "axios";
import { getToken } from '../util/getToken'

const BASE_URL = 'https://www.pre-onboarding-selection-task.shop/';

export const authInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const toDoInstance = authInstance;

toDoInstance.interceptors.request.use(
  function(config){
    const token = getToken();
    const newConfig = { ...config };
    newConfig.headers = { ...config.headers };
    newConfig.headers.Authorization = `Bearer ${token}`;
    return newConfig;
  },
  function (error) {
    return Promise.reject(error);
  }
);