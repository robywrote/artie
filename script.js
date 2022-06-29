"use strict";

const squares = 5000;

const palette = document.querySelector("#palette");

let currentColor = "blue";

const clearButton = document.querySelector("#clear-grid");
clearButton.addEventListener("click", clearGrid);

const paletteColors = ["red", "green", "blue", "black"];

function fillPalette() {
  for (const color of paletteColors) {
    console.log(color);
    const swatch = document.createElement("div");
    swatch.style.backgroundColor = color;
    swatch.classList.add("swatch");
    palette.append(swatch);
  }
}

function buildGrid(squares) {
  for (let i = 0; i < squares; i++) {
    const gridContainer = document.getElementById("grid-container");
    const newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.addEventListener("mouseover", paint);
    gridContainer.appendChild(newDiv);
  }
}

function clearGrid() {
  let painted = document.querySelectorAll(".painted");
  painted.forEach((e) => {
    e.style.background = "lightgray";
    e.classList.remove("painted");
    e.classList.add("item");
  });
}

function paint(e) {
  const item = e.target;
  item.style.background = currentColor;
  item.classList.remove("item");
  item.classList.add("painted");
}

buildGrid(squares);
fillPalette();
