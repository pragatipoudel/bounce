import Block from "./block";
import Entity from "./entity";
import Player from "./player";

export default class Game {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private entities: Entity[] = [];

    constructor(canvas: HTMLCanvasElement) { 
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d")!;
    }

    init() {
        const player = new Player(100, 200);
        this.entities.push(player);

        const numberOfBlocks = this.canvas.width / 16;
        for (let i = 0; i < numberOfBlocks; i++) {
            const block = new Block(i * 16, this.canvas.height - 16);
            this.entities.push(block);
        }
        player.setEntities(this.entities);
    }

    update() {
        for (let i = 0; i < this.entities.length; i++) {
            this.entities[i].update();
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let i = 0; i < this.entities.length; i++) {
            this.entities[i].draw(this.ctx);
        }
    }

    nextFrame() {
        this.update();
        this.draw();
        requestAnimationFrame(() => {
            this.nextFrame();
        });
    }

    start() {
        this.init();
        this.nextFrame();
    }
}