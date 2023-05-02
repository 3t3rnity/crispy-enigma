import Entity from "./entity";

export default class Block extends Entity {
    constructor(
        width: number,
        height: number,
        x: number,
        y: number,
        color: string,
        canvasApi: CanvasRenderingContext2D
    ) {
        super(width, height, x, y, color, canvasApi)
        console.log('%cblock.ts line:13 canvasApi', 'color: #007acc;', color);
        this.render();
    }
}
