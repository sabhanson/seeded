const commentFormHandler = async function (event) {
  event.preventDefault();

  const plantId = event.target.querySelector('input[name="plant-id"]').value;
  const comment = event.target.querySelector('input[name="comment-body"]').value;

  const response = await fetch("/api/comment", {
    method: "POST",
    body: JSON.stringify({
      plantId,
      comment,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.reload();
  } else {
    alert("bad comment!");
    console.error(err)
  }
};

const commentSubmit = document.querySelectorAll(".comment-form");

commentSubmit.forEach((form) => {
  form.addEventListener("submit", commentFormHandler);
});
