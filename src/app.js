const express = require("express");
const app = express();

const userRouter = require("./users.router.js");

const port = 3000;

app.get("/", (req, res) => res.send("Welcome !"));

app.use("/user", userRouter);

app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);
