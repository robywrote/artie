"use strict";

const clearButton = document.querySelector("#clear-grid");
clearButton.addEventListener("click", clearGrid);

const squares = 8192;
const rowSize = 128;
const squareSize = "0.5rem";
const gridContainer = document.querySelector("#grid-container");
document.documentElement.style.setProperty("--rowsize", rowSize);
document.documentElement.style.setProperty("--squaresize", squareSize);
const gridColor = "darkslateblue";
let currentColor = gridColor;
let isPainting = false;

const palette = document.querySelector("#palette");
const paletteColors = ["lightcoral", "skyblue", "moccasin", "palegreen"];

function fillPalette() {
  for (const color of paletteColors) {
    console.log(color);
    const swatch = document.createElement("div");
    swatch.style.backgroundColor = color;
    swatch.addEventListener("click", setCurrentColor);
    swatch.classList.add("swatch");
    palette.append(swatch);
  }
}

function buildGrid(squares) {
  for (let i = 0; i < squares; i++) {
    const square = document.createElement("div");
    square.style.backgroundColor = gridColor;
    square.addEventListener("mouseover", checkPainting);
    square.addEventListener("mousedown", startPainting);
    square.addEventListener("mouseup", stopPainting);
    gridContainer.appendChild(square);
  }
}

function clearGrid() {
  currentColor = gridColor;
  let painted = document.querySelectorAll(".painted");
  painted.forEach((e) => {
    e.style.background = gridColor;
    e.classList.remove("painted");
  });
}

function setCurrentColor(e) {
  const swatch = e.target;
  const color = swatch.style.backgroundColor;
  currentColor = color;
}

function startPainting(e) {
  isPainting = true;
  paint(e);
}

function checkPainting(e) {
  if (isPainting) {
    paint(e);
  }
}

function stopPainting(e) {
  isPainting = false;
}

function paint(e) {
  const item = e.target;
  item.style.background = currentColor;
  item.classList.add("painted");
}

buildGrid(squares);
fillPalette();
