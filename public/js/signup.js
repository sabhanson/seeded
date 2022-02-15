const signupForm = async function (event) {
  event.preventDefault();

  const usernameEl = document.querySelector("#username-input-signup").value;
  const passwordEl = document.querySelector("#password-input-signup").value;
  const emailEl = document.querySelector("#email-input-signup").value;
  const passwordCheck = document.querySelector("#passwordcheck-input-signup").value;
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const validate = emailEl.match(regex)

  if (passwordCheck !== passwordEl) {
    alert("Passwords do not match");
  } else if (!validate){
      alert('Please use the email format, example: email@email.com')
  }
  else {
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
      alert("User name already exists. Please pick another");
      console.error(err);
    }
  }
};

document.querySelector("#signup-btn").addEventListener("click", signupForm);
