import axios from "axios";

const baseURL = "https://dev.sarkariprivatejobs.in/api/v1"; // Your base URL here

console.log(baseURL);
const axiosInstance = axios.create({
  baseURL,
  // You can add other default configurations here, such as headers
});

export default axiosInstance;
