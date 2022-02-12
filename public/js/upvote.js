const upVote = document.querySelectorAll(".upVote");

const upvoteHandler = async function (event) {
  const plantId = event.target.dataset.plantid;
  const response = await fetch(`/api/upvote/${plantId}`, {
    method: "POST",
    body: JSON.stringify({
      id: plantId,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.reload();
  } else {
    alert("can't upvote");
    console.error(err);
  }
};

upVote.forEach((upvote) => {
  upvote.addEventListener("click", upvoteHandler);
});
