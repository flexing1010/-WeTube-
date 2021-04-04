import routes from "../routes";
import Video from "../models/Video";

//user routes
export const home = async (req, res) => {
  const videos = await Video.find({});
  //home template got videos variable
  res.render("home", { pageTitle: "Home", videos });
};

export const search = (req, res) => {
  const {
    query: { term: searchingFor },
  } = req;

  res.render("search", { pageTitle: "Search", searchingFor, videos });
};

//video routes
export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = (req, res) => {
  const {
    body: { file, title, description },
  } = req;
  // TO Do: Upload and save video
  res.redirect(routes.videoDetail(23424));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
