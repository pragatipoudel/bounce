export default abstract class Entity {
    abstract update(): void;
    abstract draw(ctx: CanvasRenderingContext2D): void;
    
}
