import Game from './game';

const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;

const game = new Game(canvas);
game.start();
