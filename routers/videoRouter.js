import express from "express";
import {
  deleteVideo,
  getEditVideo,
  getUpload,
  postEditVideo,
  postUpload,
  videoDetail,
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";
import routes from "../routes";

const videoRouter = express.Router();

//get functions from videocontroller
//(first.argument => calling routes variable from routes.js)
//(second.argument => calling function to handle router from controller)

// upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// edit video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

// delete video
videoRouter.get(routes.deleteVideo(), deleteVideo);

// video detail
videoRouter.get(routes.videoDetail(), videoDetail);

export default videoRouter;
