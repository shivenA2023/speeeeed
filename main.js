// Passcode Checker

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Inputs
  let limit = +document.getElementById("limit-in").value;
  let speed = +document.getElementById("speed-in").value;

  // Check Passcode
  if (speed - limit >= 20) {
    document.getElementById("output").innerHTML = "BIG TICKET";
  } else if (speed - limit <= 20.01 && speed - limit > 0) {
    document.getElementById("output").innerHTML = "SMALL TICKET";
  } else {
    document.getElementById("output").innerHTML = "NO TICKET";
  }
}
