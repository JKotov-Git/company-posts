import axios from "axios";

export const getAllPosts = async (url) => {
  try {
    const response = await axios.get(`http://localhost:8000/${url}`);

    return await response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createUserAccount = async (url, userObject) => {
  try {
    const response = await axios.post(
      `http://localhost:8000/${url}/`,
      userObject
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (url, userObject) => {
  try {
    const response = await axios.get(
      `http://localhost:8000/${url}?username=${userObject.username}`
    );
    return response;
  } catch (error) {}
};

export const createPost = async (url, postObject) => {
  try {
    const response = await axios.post(
      `http://localhost:8000/${url}`,
      postObject
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
