import axios from "axios";

function handleShowLogin() {
  document.querySelector(`[class='${localStorage.getItem("login")}']`).style.visibility = "visible";
  document.querySelector(`[class='${localStorage.getItem("login_select")}']`).style.opacity = 1;
}

async function ConnectApi(url, method = "GET", data = "") {
  if (method === "GET") {
    return await axios.get(url);
  } else if (method === "POST") {
    return await axios.post(url, data);
  }
}

export { handleShowLogin, ConnectApi };
