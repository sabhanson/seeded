const deleteComment = document.querySelectorAll(".trash-comment");

deleteComment.forEach((deleteCommentBtn) => {
  deleteCommentBtn.addEventListener("click", (e) => {
    const commentId = e.target.parentElement.dataset.commentid;
    fetch(`/api/comment/${commentId}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        location.reload();
      } else {
        console.log(err);
      }
    });
  });
});

const deletePlant = document.querySelectorAll(".trash-plant");

deletePlant.forEach((deletePlantBtn) => {
  deletePlantBtn.addEventListener("click", (e) => {
    const plantId = e.target.parentElement.dataset.plantid;

    fetch(`/api/plant/${plantId}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        location.reload();
      } else {
        console.log(err);
      }
    });
  });
});
