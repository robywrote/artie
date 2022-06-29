"use strict";

const squares = 30000;

const palette = document.querySelector("#palette");

const gridColor = "darkgray";
let currentColor = gridColor;

const clearButton = document.querySelector("#clear-grid");
clearButton.addEventListener("click", clearGrid);

const paletteColors = ["cyan", "magenta", "yellow", "black"];

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
    const gridContainer = document.getElementById("grid-container");
    const newDiv = document.createElement("div");
    newDiv.style.backgroundColor = gridColor;
    newDiv.addEventListener("mouseover", paint);
    gridContainer.appendChild(newDiv);
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

function paint(e) {
  const item = e.target;
  item.style.background = currentColor;
  item.classList.add("painted");
}

buildGrid(squares);
fillPalette();
