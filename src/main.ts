import Ball from "./ball";

const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
const ctx =  canvas.getContext("2d")!;

const ball1 = new Ball(50, "Green");
const ball2 = new Ball(100, "Red");
ball1.draw(ctx, 70, 100);
ball2.draw(ctx, 350, 350);   