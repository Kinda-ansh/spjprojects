import axios from "axios";

const baseURL = "http://13.200.213.41:8081/api/v1"; // Your base URL here

console.log(baseURL);
const axiosInstance = axios.create({
  baseURL,
  // You can add other default configurations here, such as headers
});

export default axiosInstance;
