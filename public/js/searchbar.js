function searchBarHandler(event) {
  event.preventDefault();

  fetch("/api/user/userlookup")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const searchInput = document.querySelector("#search-input").value;
      const foundUser = data.find((user) => user.username === searchInput);
      if (foundUser) {
        document.location.replace(`/profile/${foundUser.id}`);
      } else {
        document.location.replace("/nouser");
        console.error(err)
      }
    });
}

document
  .querySelector("#search-btn")
  .addEventListener("click", searchBarHandler);

