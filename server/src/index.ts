import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express, { Request, Response } from "express";
const app = express();
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

import { connectDB } from "./db/connect.js";
import { notFoundMiddleware } from "./middleware/not-found.js";
import deckRouter from "./routes/deckRoutes.js";
import cardRouter from "./routes/cardRoutes.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, "../../client/dist")));

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ success: true, msg: "Hello, World! ;)" });
});

app.use("/api/v1", deckRouter, cardRouter);

app.use(notFoundMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.VITE_MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log("error is: ", error);
  }
};

start();
