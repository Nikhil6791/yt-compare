import { Router } from "express";
import {
  fetchVideoData,
  fetchChannelData,
} from "../controllers/yt.controller.js";
const YTRouter = Router();

YTRouter.get("/video/:id", fetchVideoData);
YTRouter.get("/channel/:id", fetchChannelData);

export default YTRouter;
