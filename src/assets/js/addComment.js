import axios from "axios";
import Comment from "../../models/Comment";
import delComment from "./deleteComment";

const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");

const increaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
};

const addComment = (comment, objId) => {
  const li = document.createElement("li");
  const span = document.createElement("span");

  const delIcon = document.createElement("i");
  const classList = ["fas", "fa-ban"];
  delIcon.classList.add(...classList);
  delIcon.addEventListener("click", delComment);

  span.innerHTML = comment;
  li.id = objId;
  li.appendChild(span);
  li.appendChild(delIcon);
  commentList.prepend(li);

  increaseNumber();
};

const sendComment = async (comment) => {
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `/api/${videoId}/comment`,
    method: "POST",
    data: {
      //this comment is coming from handleSubmit
      comment,
    },
  });
  const {
    data: { objId },
  } = response;
  if (response.status === 200) {
    addComment(comment, objId);
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  const commentInput = addCommentForm.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};

function init() {
  addCommentForm.addEventListener("submit", handleSubmit);
}

if (addCommentForm) {
  init();
}
