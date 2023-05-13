import express from "express";
import Routes from "./routes/route.js";
import Connection from "./database/db.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", Routes);
const PORT = 8080;

Connection();

app.listen(PORT, () => console.log(`Server is runing  on PORT ${PORT}`));
