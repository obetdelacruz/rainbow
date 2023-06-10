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

const myGrades = [50, 75, 100];
let sum = 0;
sum = myGrades[0] + myGrades[1] + myGrades[2];
let average = sum / myGrades.length;
console.log(average);


const myGrades({
  name: {
    first: {type: String, name: "First Name", required: true}
    last:{type: String, name: "Last Name", required: true}
  },
  
  Filipino: 85,
  English: 75,
  Math: 90,
  Araling_Panlipunan: 90,
  Mapeh: {
    Music: 80,
    Arts: 80,
    PE: 80,
    Health: 80
    GMRC: 80,
    Gneral_Average: 80
  },
});