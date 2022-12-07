import Rectangle from "./rect";

export default abstract class Entity {
    abstract update(): void;
    abstract draw(ctx: CanvasRenderingContext2D): void;
    abstract getBoundingBox(): Rectangle;
}
