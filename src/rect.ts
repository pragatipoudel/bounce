export default class Rectangle {

    constructor(private x: number, private y: number, private w: number, private h: number) {

    }

    intersects(other: Rectangle): boolean {
        if (this.x + this.w <= other.x) {
            return false;
        }

        if (other.x + other.w <= this.x) {
            return false;
        }

        if (this.y + this.h <= other.y) {
            return false;
        }

        if (other.y + other.h <= this.y){
            return false;
        }
        
        return true;
    }

    isOnTop(other: Rectangle) {
        const x: number = this.x + this.w / 2;
        const y: number = this.y + this.h + 1;
        return (other.intersectsPoint(x, y));

    }

    intersectsPoint(px: number, py: number): boolean {
        return (px > this.x && px < this.x + this.w && py > this.y && py < this.y + this.h)
    }

    getOffset(other: Rectangle): number[] {
        let offsetX: number = 0;
        let offsetY: number = 0;

        if (this.y < other.y && this.y + this.h > other.y) {
            offsetY = -(this.y + this.h - other.y);
        } else if (this.y < other.y + other.h &&
                 this.y + this.h > other.y + other.h) {
            offsetY = (other.y + other.h) - this.y;
        }

        if (this.x < other.x && this.x + this.w > other.x) {
            offsetX = -(this.x + this.w - other.x)
        } else if (this.x < other.x + other.w &&
                this.x + this.w > other.x + other.w) {
            offsetX =  (other.x + other.w) - this.x;

        }
        return [offsetX, offsetY];
    }

    getSlope(other: Rectangle): number[] {
        let dy = (other.y + other.h / 2) - this.y - this.h / 2;
        let dx = (other.x + other.w / 2) - this.x - this.x / 2;

        return [dy, dx];
    }
 }