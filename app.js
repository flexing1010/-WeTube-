import express from "express";
import logger from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { userRouter } from "./router";
import bodyParser from "body-parser";

const app = express();

const handleHome = (req, res) => res.send("Hello from korea");

const handleProfile = (req, res) => res.send("You are on my profile");

app.use(cookieParser());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(logger("dev"));

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.use("/user", userRouter);
export default app;
