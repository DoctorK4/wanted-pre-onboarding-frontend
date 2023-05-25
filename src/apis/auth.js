import { authInstance } from "./axiosInstance";

export const signUp = async (email, password) => {
  try {
    const response = await authInstance.post('/auth/signup', {
      email,
      password,
    });  
    return response;
  } catch (error) {
    console.log(error);
    alert(error.response?.data?.message)
  }
};

export const signIn = async (email, password) => {
  try {
    const response = await authInstance.post('/auth/signin', {
      email,
      password,
    });
    console.log(response);
    return response
  } catch (error) {
    console.log(error);
    alert(error.response?.data?.message)
  }
};
