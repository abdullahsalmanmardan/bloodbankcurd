import axios from "axios";

// This line creates an instance of Axios with a base URL.
// The baseURL is set to the value of the environment variable REACT_APP_BASE_URL.
// This means that all requests made using this Axios instance will use this base URL as a prefix.

// const API = axios.create({ baseURL: process.env.REACT_APP_BASEURL });
const API = axios.create({
  baseURL: "http://localhost:8001/api/v1",
  headers: {
    "Content-Type": "application/json", // Ensure this is correct
  },
});

// before sending request to the server it will modify the header and add authorization to
// each request.
API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
  } else {
    return req;
  }
});

export default API;
