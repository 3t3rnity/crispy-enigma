import Entity from "./entity";

export default class Paddle extends Entity {
    dx: number;

    constructor(
        width: number,
        height: number,
        x: number,
        y: number,
        color: string,
        canvasApi: CanvasRenderingContext2D
    ) {
        super(width, height, x, y, color, canvasApi)
        this.dx = 0;

        window.addEventListener('keydown', (e: KeyboardEvent) => {
            console.log('%cpaddle.ts line:18 e', 'color: #007acc;', e);
            if (e.which === 37) {
                this.move('left')
            } else if (e.which === 39) {
                this.move('right')
            }
        })
        
        window.addEventListener('keyup', (e: KeyboardEvent) => {
                this.move('stop')
        })
    }

    public move(direction: string) {
        if(direction === 'left') {
            this.x -= 50
            console.log('%cpaddle.ts line:35 this.dx', 'color: #007acc;', this.dx);
        }
        
        if(direction === 'right') {
            this.x += 50
            console.log('%cpaddle.ts line:35 this.dx', 'color: #007acc;', this.dx);
        }
        
        if(direction === 'stop') {
            console.log('%cpaddle.ts line:35 this.dx', 'color: #007acc;', this.dx);
        }
    }
}
