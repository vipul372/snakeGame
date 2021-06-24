import { foodLocation, updateFoodLocation } from "./food.js";
import { getInputDirection } from "./input.js";

export const snakeSpeed = 5;
const EXPENSION_RATE = 1;

//css grid center is on top left corner, therfore y++ is downward and y-- is upward
export const snakeBody = [
  { x: 11, y: 11 }
];

export function updateSnakeDirection() {
  for(let i = snakeBody.length - 2; i >=0; i--){
    snakeBody[i+1] = {...snakeBody[i]}
  }
  snakeBody[0].x += getInputDirection().x
  snakeBody[0].y += getInputDirection().y
}

export function eatFood() {
  if (onSnake(foodLocation)) {
    updateFoodLocation();
    expandSnake(EXPENSION_RATE);
  }
}

export function onSnake(location, ignoreHead = false ) {
  return snakeBody.some((snakeBodyBox, index) => {
      if(ignoreHead && index === 0) return false
      return location.x === snakeBodyBox.x && location.y === snakeBodyBox.y
    });
}

export function expandSnake(amount){
  for(let i=amount; i>0; i--){
    snakeBody.push({...snakeBody[snakeBody.length-1]})
  }
}

export function getSnakeHead(){
  return snakeBody[0]
}

export function snakeIntersection(){
  if(snakeBody.length == 2) return false
  return onSnake(snakeBody[0], true )
}

export function drawSnake(gameBoard) {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add("snake");
    gameBoard.appendChild(snakeElement);
  });
}
