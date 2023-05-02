import ballCore from "./ballCore";

export default class Ball extends ballCore {
    constructor(
        width: number,
        height: number,
        x: number,
        y: number,
        color: string,
        speed: number,
        canvasApi: CanvasRenderingContext2D
    ) {
        super(width, height, x, y, color, speed, canvasApi)

        this.render()
    }
}
