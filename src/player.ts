import Entity from "./entity";
import Rectangle from "./rect";

export default class Player extends Entity {
    private posX: number;
    private posY: number;
    private readonly ballRadius: number = 20;
    private readonly ballColor = 'Green';
    private readonly g = 0.09;
    private vy = 0;
    private readonly dt = 1;

    private entities: Entity[] = [];


    constructor(posX: number, posY: number) {
        super();
        this.posX = posX;
        this.posY = posY;
    }

    setEntities(entities: Entity[]) {
        this.entities = entities;
    }

    update() {
        this.vy += this.g * this.dt;
        this.posY += this.vy * this.dt;
        this.checkCollision();
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.posX, this.posY, this.ballRadius, 0, Math.PI * 2 );
        ctx.fillStyle = this.ballColor;
        ctx.fill();
        ctx.closePath();

    }

    getBoundingBox(): Rectangle {
        return new Rectangle(
            this.posX - this.ballRadius,
            this.posY - this.ballRadius,
            2 * this.ballRadius,
            2 * this.ballRadius,
        )
    }

    private checkCollision() {
        const myBox = this.getBoundingBox();
        for (let i = 0; i < this.entities.length; i++) {
            const entity = this.entities[i];
            if (entity == this) {
                continue;
            }

            const otherBox = entity.getBoundingBox();
            if (myBox.intersects(otherBox)) {
                this.vy *= -1;
                break;
            }
        }


    }

}