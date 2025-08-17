const user = localStorage.getItem("currentUser");
const data = JSON.parse(localStorage.getItem(user));
document.getElementById("user").innerText = user;
document.getElementById("wallet").innerText = data.wallet;

function playGame() {
  data.wallet -= 10;
  localStorage.setItem(user, JSON.stringify(data));
  document.getElementById("wallet").innerText = data.wallet;
  alert("Game played! ₹10 deducted.");
}
