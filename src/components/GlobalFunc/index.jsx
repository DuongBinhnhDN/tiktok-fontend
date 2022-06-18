function handleShowLogin() {
  document.querySelector(`[class='${localStorage.getItem("login")}']`).style.display = "block";
  document.querySelector(`[class='${localStorage.getItem("login")}']`).style.display = "flex";
}

export { handleShowLogin };
