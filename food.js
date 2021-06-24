import { getRandomGridPosition } from "./grid.js";
import { onSnake } from "./snake.js";

export let foodLocation = getRandomGridPosition();

export function updateFoodLocation() {
  foodLocation = getRandomGridPosition()
  if (onSnake(foodLocation)) {
    updateFoodLocation();
  }
}


export function drawFood(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = foodLocation.y;
  foodElement.style.gridColumnStart = foodLocation.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}