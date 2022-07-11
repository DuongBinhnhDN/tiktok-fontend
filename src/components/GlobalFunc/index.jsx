import axios from "axios";

function handleShowLogin() {
  document.querySelector(`[class='${localStorage.getItem("login")}']`).style.visibility = "visible";
  document.querySelector(`[class='${localStorage.getItem("login_select")}']`).style.opacity = 1;
}

function handleShowSound() {
  document.querySelector(`[class='${localStorage.getItem("sound")}']`).style.visibility = "hidden";
  document.querySelector(`[class='${localStorage.getItem("sound_select")}']`).style.opacity = 0;
  for (let index = 0; index < localStorage.getItem("CountVideo"); index++) {
    document.querySelectorAll("video")[index].muted = false;
  }
}

async function ConnectApi(url, method = "GET", data = "") {
  if (method === "GET") {
    return await axios.get(url);
  } else if (method === "POST") {
    return await axios.post(url, data);
  }
}

export { handleShowLogin, ConnectApi, handleShowSound };
