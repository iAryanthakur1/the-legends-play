const admin = "admin"; // Set your admin username
if (localStorage.getItem("currentUser") !== admin) {
  alert("Access Denied");
  window.location.href = "index.html";
}

function addFunds() {
  const user = document.getElementById("targetUser").value;
  const amt = parseInt(document.getElementById("amount").value);
  const data = JSON.parse(localStorage.getItem(user));
  if (data) {
    data.wallet += amt;
    localStorage.setItem(user, JSON.stringify(data));
    alert(`₹${amt} added to ${user}'s wallet`);
  } else {
    alert("User not found");
  }
}
