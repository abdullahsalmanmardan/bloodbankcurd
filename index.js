const express = require("express");
const app = express();
const connectDB = require("./db/conn");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

const userRouter = require("./routes/authRoutes");
const cors = require("cors");

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/api/v1/auth", userRouter);
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));

const port = 8001;
const start = async () => {
  try {
    await connectDB(process.env.CONNSTRING);
    app.listen(port, console.log("listening on 8001"));
  } catch (error) {
    console.log(error);
  }
};

start();
