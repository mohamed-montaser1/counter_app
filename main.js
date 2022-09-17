const inc = document.querySelector("#inc");
const dec = document.querySelector("#dec");
let counter_heading = document.querySelector(".container h1");

inc.onclick = function () {
  counter_heading.innerText++;
  counter_heading.style.color = "green";
  if (counter_heading.innerText == "0") {
    counter_heading.style.color = "white";
  } else if (counter_heading.innerText <= "0") {
    counter_heading.style.color = "red";
  }
};

dec.onclick = function () {
  counter_heading.innerText--;
  counter_heading.style.color = "red";
  if (counter_heading.innerText == "0") {
    counter_heading.style.color = "white";
  } else if (counter_heading.innerText >= "0") {
    counter_heading.style.color = "green";
  }
};
