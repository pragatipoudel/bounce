import Entity from "./entity";
import Rectangle from "./rect";

export default class Player extends Entity {
    private posX: number;
    private posY: number;
    private readonly ballRadius: number = 20;
    private readonly ballColor = 'Green';
    private readonly g = 0.09;
    private vx = 0;
    private vy = 0;
    private readonly dt = 1;
    private onGround = false;
    private leftPressed = false;
    private rightPressed = false;
    private spacePressed = false;

    private entities: Entity[] = [];


    constructor(posX: number, posY: number)  {
        super();
        this.posX = posX;
        this.posY = posY;

        document.addEventListener("keydown", this.keyDownHandler);
        document.addEventListener("keyup", this.keyUpHandler);

    }

    setEntities(entities: Entity[]) {
        this.entities = entities;
    }

    update() {
        this.vy += this.g * this.dt;
        if (this.leftPressed) {
            this.vx = -3;
        } 

        
        else if (this.rightPressed) {
            this.vx = 3;
        } else {
            this.vx = 0;
        }

        if (this.spacePressed == true && this.onGround == true) {
            this.vy = -6;
        }
        this.posX += this.vx * this.dt;
        this.checkCollision("x");
        
        this.posY += this.vy * this.dt;
        this.checkCollision("y");
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

    private checkCollision(direction: string) {
        let myBox = this.getBoundingBox();

        this.entities
            .filter(entity => entity != this)
            .forEach(entity =>{
                const otherBox = entity.getBoundingBox();
                const [offsetX, offsetY] = myBox.getOffset(otherBox);
                if (offsetX !== 0 && offsetY !== 0) {
                    if (direction === "y") {
                        this.posY += offsetY;
                        this.vy = 0;
                    } else {
                        this.posX += offsetX;
                        this.vx = 0;
                    }

                    myBox = this.getBoundingBox();
                }
            })


        
        this.onGround = this.entities
                            .filter(entity => entity != this)
                            .some (entity => {
                                const otherBox = entity.getBoundingBox();
                                return myBox.isOnTop(otherBox);
                            })


    }

    private keyDownHandler = (e: KeyboardEvent) => {
        if (e.key === "Right" || e.key === "ArrowRight") {
            this.rightPressed = true;
        } 
        if (e.key === "Left" || e.key === "ArrowLeft") {
            this.leftPressed = true;
        }

        if (e.key === " ") {
            this.spacePressed = true;;
        }
    }

    private keyUpHandler = (e: KeyboardEvent) => {
        if (e.key === "Right" || e.key === "ArrowRight") {
            this.rightPressed =  false;
        }  
        if (e.key === "Left" || e.key === "ArrowLeft") {
            this.leftPressed = false;
        }        
        if (e.key === " ") {
            this.spacePressed = false;
        }
    }

}