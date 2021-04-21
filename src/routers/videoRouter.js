import express from "express";
import {
  deleteVideo,
  getEditVideo,
  getUpload,
  postEditVideo,
  postUpload,
  videoDetail,
} from "../controllers/videoController";
import { onlyPrivate, uploadVideo } from "../middlewares";
import routes from "../routes";

const videoRouter = express.Router();

//get functions from videocontroller
//(first.argument => calling routes variable from routes.js)
//(second.argument => calling function to handle router from controller)

// upload
videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);

// edit video
videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

// delete video
videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);

// video detail
videoRouter.get(routes.videoDetail(), videoDetail);

export default videoRouter;
