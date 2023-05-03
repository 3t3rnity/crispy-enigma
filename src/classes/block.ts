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
    }
}
