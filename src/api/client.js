import axios from "axios";

const client = axios.create({ baseURL: "http://localhost:8000/api" });

export default client;

// https://mrp-back-asg7n.ondigitalocean.app/api/movie/top-rated
// const client = axios.create({
//   baseURL: "https://mrp-back-asg7n.ondigitalocean.app/api",  FOR LIVE SERVER
// });
