import { Router } from "express";
import { fetchVideoData } from "../controllers/yt.controller.js";
const YTRouter = Router();

YTRouter.post("/video", fetchVideoData);

export default YTRouter;
