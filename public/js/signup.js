const signupForm = async function(event) {
    event.preventDefault();

    const usernameEl = document.querySelector('#username-input-signup');
    const passwordEl = document.querySelector('#password-input-signup');
    const emailEl = document.querySelector('#email-input-signup');

    const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({
            username: usernameEl.value,
            password: passwordEl.value,
            email: emailEl.value,
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/profile');
    } else {
        alert('Check your input fields');
    }
};

document.querySelector('#signup-form').addEventListener('submit', signupForm);