import axios from "axios";

function handleShowLogin() {
  document.querySelector(`[class='${localStorage.getItem("login")}']`).style.display = "block";
  document.querySelector(`[class='${localStorage.getItem("login")}']`).style.display = "flex";
}

async function ConnectApi(url, method = "GET", data = "") {
  let json;
  if (method == "GET") {
    json = await axios.get(url);
  } else if (method == "POST") {
    json = await axios.post(url, data);
  }
  return json;
}

export { handleShowLogin, ConnectApi };
