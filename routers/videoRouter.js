import express from "express";
import {
  deleteVideo,
  editVideo,
  upload,
  videoDetail,
} from "../controllers/videoController";
import routes from "../routes";

const videoRouter = express.Router();

//get functions from videocontroller
//(first.argument => calling routes variable from routes.js)
//(second.argument => calling function to handle router from controller)
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);
videoRouter.get(routes.videoDetail, videoDetail);

export default videoRouter;
