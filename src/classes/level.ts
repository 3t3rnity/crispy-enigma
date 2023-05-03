import Block from "./block"


export default class Level {
    canvasApi: CanvasRenderingContext2D;

    constructor(canvasApi: CanvasRenderingContext2D) {
        this.canvasApi = canvasApi
    }

    public render(object: any): void {
            for(let row = 0; row < 3; row++) {
                for(let col = 0; col < 23; col++) {
                    const block = new Block(32, 32, 38 + 40 * col, 32 + 40 * row, 'blue', this.canvasApi)
                    block.render(object)
                }
            }
        
    }
}