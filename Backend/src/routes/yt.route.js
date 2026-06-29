import { Router } from "express";
import {
  fetchVideoData,
  fetchChannelData,
  getChannelID,
} from "../controllers/yt.controller.js";
const YTRouter = Router();

YTRouter.get("/video/:id", fetchVideoData);
YTRouter.get("/channel/:userName", getChannelID);
YTRouter.get("/channel/search/:channelId", fetchChannelData);

export default YTRouter;
