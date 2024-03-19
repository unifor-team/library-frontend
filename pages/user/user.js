async function listUsers() {
  try {
    const users = await axios.get(api_url + "user");
    const { data } = users;

    const tableBody = document.querySelector(".tbody");
    
    for (const user of data) {
      const row = document.createElement("tr");
      const td = document.createElement("td");
      const td2 = document.createElement("td");
      const td3 = document.createElement("td");
      const td4 = document.createElement("td");

      td.innerHTML = user.email;
      td2.innerHTML = user.name;
      td3.innerHTML = user.account_status;
      td4.innerHTML = user.created_at;

      row.appendChild(td);
      row.appendChild(td2);
      row.appendChild(td3);
      row.appendChild(td4);

      tableBody.appendChild(row);
    }
  } catch (err) {
    console.log(err)
  }
}

window.onload = listUsers();