import axios from "axios";

const fetchData = (method, url, data) => {
  return axios({
    method: method,
    url: `http://localhost:8000/${url}`,
    data: data,
  })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      return new Error(error);
    });
};

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

export const loginUser = async (method, url, userObject) => {
  try {
    return await fetchData(method, url, userObject);
  } catch (error) {
    console.log(error);
  }
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

// https://github.com/JKotov-Git/

// try {
//   const response = await axios.get(
//     `http://localhost:8000/${url}?username=${userObject.username}`
//   );
//   return response;
// } catch (error) {
//   console.log(error);
// }
