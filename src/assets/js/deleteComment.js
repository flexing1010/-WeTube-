import axios from "axios";

const deleteComment = document.querySelectorAll("#jsDeleteBtn");
const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");

//const PostDelComment = async();
const delComment = async (event) => {
  const {
    parentNode: { id },
  } = event.target;
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `/api/${videoId}/delete/${id}`,
    method: "POST",
    data: {
      //to videoController, deleteComment
      id,
      videoId,
    },
  });
  if (response.status === 200) {
    const targetNode = document.getElementById(id);
    commentList.removeChild(targetNode);
  }
};

function init() {
  deleteComment.forEach((item) => {
    item.addEventListener("click", delComment);
  });
}

if (addCommentForm) {
  init();
}

export default deleteComment;
