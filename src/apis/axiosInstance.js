import axios from "axios";

const BASE_URL = 'https://www.pre-onboarding-selection-task.shop/';

export const api = axios.create({
  baseURL: BASE_URL,
  Headers: {
    'Content-Type': 'application/json',
  },
});