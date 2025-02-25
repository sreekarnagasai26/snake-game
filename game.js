import { SNAKE_SPEED, update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection } from "./snake.js"
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

//gameloop

let lastrenderedTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')



function main(currentTime){
    if (gameOver) {
        if (confirm('You lost. Press ok to restart.')) {
          window.location = '/'
        }
        return
      }



   
   

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastrenderedTime)/1000
    lastrenderedTime = currentTime
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return 
    console.log(currentTime)


    update()
    draw()
}

window.requestAnimationFrame(main)


function update(){
updateSnake()
updateFood()
checkDeath()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
  }
  
  function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
  }