import cookieParser from "cookie-parser";
import { configDotenv } from "dotenv";
import express, { urlencoded } from "express";
import userRoute from "./routes/user.js";
import cors from "cors";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

const app = express();
export default app;

configDotenv({
  path: "./config/config.env",
});

app.use(cookieParser());

app.use(express.json());
app.use(
  urlencoded({
    extended: true,
  })
);



// app.use(
//   cors({
//     origin: "localhost:5173",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );

app.use("/api/user", userRoute);

app.use(errorMiddleware)
