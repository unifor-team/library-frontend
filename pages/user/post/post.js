




async function signup() {
    try {
      const signupData = getDataByInputs();
      await axios.post(api_url + "post", signupData);
      setTimeout(() => {
        switchPageToLogin();
      }, 2000)
    } catch (e) {
      console.log(e)
    }
  }

  function getDataByInputs() {
    return  {
      email: document.querySelector("#usuario").value,
      password: document.querySelector("#titulo").value,
      name: document.querySelector("#mensagem").value
    }
}