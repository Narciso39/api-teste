import express from "express";
import router from "./routes/routes.js";
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(router);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});