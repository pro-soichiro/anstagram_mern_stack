import axios from "axios";

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(
      error.response.data.msg || "時間をおいてお試しください。"
    );
  }
);

const ENDPOINT_URL = "/api/users";

const userApi = {
  async getAll() {
    const result = await axios.get(ENDPOINT_URL);
    return result.data;
  },
  async get(id) {
    const result = await axios.get(ENDPOINT_URL + '/' + id);
    return result.data;
  },
  async post(user) {
    const result = await axios.post(ENDPOINT_URL, user)
    return result.data;
  },
  async patch(user) {
    const result = await axios.patch(ENDPOINT_URL + '/' + user._id, user);
    return result.data;
  },
  async delete(user) {
    const result = await axios.delete(ENDPOINT_URL + '/' + user._id);
    return result.data;
  },
};

export default userApi;
