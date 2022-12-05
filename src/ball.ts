export default class Ball {
    private radius: number;
    private color: string;

    constructor(radius: number, color: string) {
        this.radius = radius;
        this.color = color;
    }

    draw(ctx: CanvasRenderingContext2D, x: number, y: number) {
        ctx.beginPath();
        ctx.arc(x, y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}