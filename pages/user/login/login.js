function verifyToken() {
  const token = window.localStorage.getItem("token");

  if (token) {
    window.location.href = "../../../index.html";
  }
}

verifyToken();

async function login() {
  try {
    await getToken();
    setTimeout(() => {
      verifyToken();
    }, 2000);
  } catch (e) {
    console.log(e)
  }
}

addEventListener("submit", async (event) => {
  event.preventDefault();
  await login();
});

async function getToken() {
  const login = getDataByInputs();
  const request = await axios.post(api_url + "auth/login", login);
  const { access_token } = request.data;
  window.localStorage.setItem("token", access_token);
}

function getDataByInputs() {
  return  {
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value
  }
}