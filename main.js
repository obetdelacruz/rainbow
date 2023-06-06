const btn = document.getElementById("button");

const rainbow = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "rebeccapurple",
  "violet",
  "brown",
  "black",
  "white",
];

function change() {
  document.body.style.background =
    rainbow[Math.floor(rainbow.length * Math.random())];
}

btn.addEventListener("click", change);

const avengers = ["captain america", "ironman", "thor", "hulk"];

console.log(
  `${avengers[avengers.length - 1]} is the most strongest avengers`,
  `${avengers[0]} is the weakest avengers`
);
