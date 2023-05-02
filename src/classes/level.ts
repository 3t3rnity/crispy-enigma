import Block from "./block"


export default class Level {
    structure: Array<Block>;
    canvasApi: CanvasRenderingContext2D;

    constructor(canvasApi: CanvasRenderingContext2D) {
        this.structure = []
        this.canvasApi = canvasApi
    }

    public render(): void {
        if(!this.structure.length) {
            for(let row = 0; row < 5; row++) {
                for(let col = 0; col < 23; col++) {
                    const block = new Block(32, 32, 38 + 40 * col, 32 + 40 * row, 'blue', this.canvasApi)
                    this.structure.push(block)
                }
            }
        }
    }
}