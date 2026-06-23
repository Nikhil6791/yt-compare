import { Router } from "express";
import { fetchVideoData } from "../controllers/yt.controller.js";
const YTRouter = Router();

YTRouter.get("/video/:id", fetchVideoData);

export default YTRouter;
