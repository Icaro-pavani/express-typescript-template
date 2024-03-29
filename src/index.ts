import express, { json } from "express";
import "express-async-errors";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(json());
app.use(cors());

const PORT: number = +process.env.PORT || 5000;

app.listen(PORT, () => console.log(`API online on port ${PORT}`));
