import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sneakerRouter from "./src/controllers/routes/controller.js"
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use('/imagens', express.static(join(__dirname, 'imagens')));

app.use("/sneaker", sneakerRouter);

app.listen(port, () => {
  console.log("Server is running!");
});
