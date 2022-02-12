const signupForm = async function (event) {
  event.preventDefault();

  const usernameEl = document.querySelector("#username-input-signup").value;
  const passwordEl = document.querySelector("#password-input-signup").value;
  const emailEl = document.querySelector("#email-input-signup").value;
  const passwordCheck = document.querySelector(
    "#passwordcheck-input-signup"
  ).value;

  if (passwordCheck !== passwordEl) {
    alert("Passwords do not match");
  } else {
    const response = await fetch("/api/user/signup", {
      method: "POST",
      body: JSON.stringify({
        username: usernameEl,
        password: passwordEl,
        email: emailEl,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Check your input fields");
      console.error(err);
    }
  }
};

document.querySelector("#signup-btn").addEventListener("click", signupForm);
