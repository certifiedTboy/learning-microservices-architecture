import express from "express";
import "express-async-errors";
import cookieSession from "cookie-session";
import { createChargeRouter } from "./routes/new";

import {
  errorHandler,
  NotFoundError,
  currentUser,
} from "@infiniteideas/common";

const app = express();

app.set("trust proxy", true);

// app.use(cors());

app.use(express.json());

app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);

app.use(currentUser);
app.use(createChargeRouter);

app.get("*", async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
