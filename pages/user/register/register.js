function verifyToken() {
  const token = window.localStorage.getItem("token");

  if (token) {
    window.location.href = "../register/register.html";
  }
}

function switchPageToLogin() {
  window.location.href = "../login/login.html";
}

verifyToken();

async function signup() {
  try {
    const signupData = getDataByInputs();
    await axios.post(api_url + "user", signupData);
    setTimeout(() => {
      switchPageToLogin();
    }, 2000)
  } catch (e) {
    console.log(e)
  }
}

addEventListener("submit", async (event) => {
  event.preventDefault();
  await signup();
});

function getDataByInputs() {
  return  {
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value,
    name: document.querySelector("#name").value
  }
}