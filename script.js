// Start Change Name Input
let link = document.querySelector(".logo");
let inpName = document.querySelector(".changeName");
let nameTitle = document.querySelector("article h2 span");
inpName.onblur = function (e) {
  e.preventDefault();
  if (inpName.value !== "" && inpName.value !== " ") {
    link.innerHTML = inpName.value;
    nameTitle.innerHTML = inpName.value;
  }
};
// End Change Name Input
// Start Generate Random Colors
let btnColor = document.querySelector(".first");
let header = document.querySelector("header");
let symbol = document.querySelector(".symb");
let anchor = document.querySelector("article a");
let hexColor = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let color = [];
let finalColor = "";

if (window.localStorage.getItem("color")) {
  header.style.backgroundColor = window.localStorage.getItem("color");
  symbol.style.color = window.localStorage.getItem("color");
  anchor.style.backgroundColor = window.localStorage.getItem("color");
}

btnColor.onclick = function () {
  color = [];
  for (let i = 0; i < 6; i++) {
    color.push(hexColor[Math.floor(Math.random() * hexColor.length)]);
  }
  finalColor = `#${color.join("")}`;

  header.style.backgroundColor = finalColor;
  symbol.style.color = finalColor;
  anchor.style.backgroundColor = finalColor;
  console.log(color);
  window.localStorage.setItem("color", finalColor);
};
// End Generate Random Colors
// Start Generate Random Images
let landing = document.querySelector(".landing");
let imgArr = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "09.jpg",
  "010.jpg",
  "011.jpg",
  "012.jpg",
  "013.jpg",
  "014.jpg",
];
let random = "";
let random2 = "";
let symbol2 = document.querySelector(".symb2");
let btnImage = document.querySelector(".second");
btnImage.onclick = function () {
  random = imgArr[Math.floor(Math.random() * imgArr.length)];
  random2 = `url("images/${random}")`;
  landing.style.backgroundImage = random2;
  symbol2.style.color = "#2d8dff";
  window.localStorage.setItem("image", random2);
  console.log(random2);
};
if (window.localStorage.getItem("image")) {
  landing.style.backgroundImage = window.localStorage.getItem("image");
}
// End Generate Random Images
// Start refresh Btn
let refresh = document.querySelector(".symb3");

refresh.onclick = function () {
  header.style.backgroundColor = "#2d8dff";
  symbol.style.color = "#666666";
  anchor.style.backgroundColor = "#2d8dff";
  landing.style.backgroundImage = `url("images/01.jpg")`;
  symbol2.style.color = "#666666";
  window.localStorage.setItem("refresh", "#2d8dff");
};

if (window.localStorage.getItem("refresh")) {
  header.style.backgroundColor = "#2d8dff";
  symbol.style.color = "#666666";
  anchor.style.backgroundColor = "#2d8dff";
  landing.style.backgroundImage = `url("images/01.jpg")`;
  symbol2.style.color = "#666666";
}
// End refresh Btn
