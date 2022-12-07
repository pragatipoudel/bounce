import Entity from "./entity";

export default class Player extends Entity {
    private posX: number;
    private posY: number;
    private readonly ballRadius: number = 20;
    private readonly ballColor = 'Green';

    constructor(posX: number, posY: number) {
        super();
        this.posX = posX;
        this.posY = posY;
    }

    update() {

    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.posX, this.posY, this.ballRadius, 0, Math.PI * 2 );
        ctx.fillStyle = this.ballColor;
        ctx.fill();
        ctx.closePath();

    }

}