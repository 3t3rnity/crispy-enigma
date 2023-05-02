import Entity from "./entity";

export default class Paddle extends Entity {
    constructor(
        width: number,
        height: number,
        x: number,
        y: number,
        color: string,
        canvasApi: CanvasRenderingContext2D
    ) {
        super(width, height, x, y, color, canvasApi)

        this.render();
    }
}
