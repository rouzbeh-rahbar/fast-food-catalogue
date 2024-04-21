import axios from "axios";
// const cors = require("cors");
// App.use(
//   cors({
//     origin: "http://localhost:3001", //
//   })
// );

export default axios.create({
  baseURL: "https://react-mini-projects-api.classbon.com/",
});
