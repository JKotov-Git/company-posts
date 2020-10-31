import axios from "axios";

export const getAllPosts = async (url) => {
  try {
    const response = await axios.get(`http://localhost:8000/${url}`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createUserAccount = async (url) => {
  try {
    const response = await axios.post(`http://localhost:8000/${url}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
