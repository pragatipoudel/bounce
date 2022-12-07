import Entity from "./entity";
import Rectangle from "./rect";

export default class Block extends Entity {
    private posX: number;
    private posY: number;
    private readonly blockLength = 16;
    private readonly blockColor = 'Blue';

    constructor(posX:number, posY:number) {
        super();
        this.posX = posX;
        this.posY = posY;
    }

    update() {

    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.rect(this.posX, this.posY, this.blockLength, this.blockLength);
        ctx.fillStyle = this.blockColor;
        ctx.fill();
        ctx.closePath();
    }

    getBoundingBox(): Rectangle {
        return new Rectangle(this.posX, this.posY, this.blockLength, this.blockLength)
    }
}