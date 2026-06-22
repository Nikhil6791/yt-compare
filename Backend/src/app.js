import express from "express";
import cors from "cors";
import YTRouter from "./routes/yt.route.js";
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/yt", YTRouter);
export default app;
