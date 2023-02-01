/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

const startButton = document.getElementById('start');
const restartButton = document.getElementById('restart');
restartButton.classList.add('hidden');

const player = new Component(canvas.width / 2, canvas.height / 2, 25, 25, ctx);


let game = null; 

startButton.onclick = function () {
  console.log(game, '1º')

    game = new Game(ctx, canvas.width, canvas.height, player);
    game.start();
    console.log(game, '2º')
  
  startButton.classList.add('hidden');
} 

restartButton.onclick = function () {
  startButton.classList.remove('hidden');
  restartButton.classList.add('hidden');
  game.clear();
  game.intervalId = null;
        game.frames = 0;
        game.result = 10;
        game.food = {x: 0, y: 0, w: 25, h:25};
        game.junk = {x: 0, y: 0, w: 25, h: 25};
player.x = canvas.width / 2
player.y = canvas.height / 2
player.movementX = 0;
      player.movementY = 0;

 /*  game.start();
 */
  
}


document.addEventListener('keydown', (e) => {

  switch (e.code) {

    case 'ArrowUp':
      if(player.direction !== 'down') {
      player.movementX = 0;
      player.movementY = -3;
      player.direction = 'up';
      }
      break;
      
    case 'ArrowDown':
      if(player.direction !== 'up') {
      player.movementX = 0;
      player.movementY = 3;
      player.direction = 'down';
      }
      break;

    case 'ArrowLeft':
      if(player.direction !== 'right') {
      player.movementX = -3;
      player.movementY = 0;
      player.direction = 'left';
      }
      break;
    case 'ArrowRight':
      if(player.direction !== 'left') {
      player.movementX = 3;
      player.movementY = 0;
      player.direction = 'right';
      }
      break;
  }
});

