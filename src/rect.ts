export default class Rectangle {

    constructor(private x: number, private y: number, private w: number, private h: number) {

    }

    intersects(other: Rectangle): boolean {
        if (this.x + this.w < other.x) {
            return false;
        }

        if (other.x + other.w < this.x) {
            return false;
        }

        if (this.y + this.h < other.y) {
            return false;
        }

        if (other.y + other.h < this.y){
            return false;
        }
        
        return true;
    }
}