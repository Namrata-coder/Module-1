let bulebutton = document.querySelector("#blue_button");
let redbutton = document.querySelector("#red_button");
let greenbutton = document.querySelector("#green_button");
let yellowbutton = document.querySelector("#yellow_button");
let whitebutton = document.querySelector("#white_button");


let contentText = document.querySelector(".contain_text");

bulebutton.addEventListener("click", bluefunction);

function bluefunction() {
  contentText.style.backgroundColor = "blue";
}

redbutton.addEventListener("click", redfunction);

function redfunction() {
  contentText.style.backgroundColor = "red";
}



let name = document.querySelector("#name");

name.textContent = prompt("Hey your name please!");

greenbutton.addEventListener("click", greenfunction);

function greenfunction() {
  contentText.style.backgroundColor = "green";
}
yellowbutton.addEventListener("click", yellowfunction);

function yellowfunction() {
  contentText.style.backgroundColor = "yellow";
}

whitebutton.addEventListener("click", whitefunction);

function whitefunction() {
  contentText.style.backgroundColor = "white";
}


// paragraph refrence

let paragraph = document.getElementById("orginal_text");

// this is for text areas
let textarea = document.getElementById("text_area_text");

textarea.addEventListener("change", changeText);

function changeText() {
  let content = textarea.value;

  paragraph.textContent = content;
}