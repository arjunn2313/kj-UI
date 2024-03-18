import axios from "axios";

// Update the Baseurl variable to match your Django backend server's URL
export const Baseurl = "http://localhost:8000/api/";

axios.defaults.withCredentials = true;


const request = axios.create({
  baseURL: Baseurl,
});

export default request;
