import { snakeSpeed, updateSnakeDirection, eatFood, drawSnake, getSnakeHead, snakeIntersection  } from "./snake.js";
import {drawFood} from './food.js'
import { outsideGrid } from "./grid.js";
const gameBoard = document.getElementById("game-board")

let lastRenderTime = 0;
export let gameOver = false

function main(currentTime) {

  if (gameOver) {
    if (confirm('Game Over! Press ok to restart.')) {
      window.location = '/snakeGame'
    }
    return
  }

  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / snakeSpeed) return;

  lastRenderTime = currentTime;
  update()
  draw()
}

window.requestAnimationFrame(main);

function update(){
  updateSnakeDirection()
  eatFood()
  checkDeath()
}

function draw(){
  gameBoard.innerHTML = ""
  drawSnake(gameBoard)
  drawFood(gameBoard)
}

function checkDeath(){
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
