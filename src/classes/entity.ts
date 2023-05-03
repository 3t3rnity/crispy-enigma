export default class Entity {
    width: number;
    height: number;
    x: number;
    y: number;
    color: string;
    canvasApi: CanvasRenderingContext2D;

    constructor(
        width: number,
        height: number,
        x: number,
        y: number,
        color: string,
        canvasApi: CanvasRenderingContext2D
    ) {
        this.canvasApi = canvasApi;
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;
    }

    public collides(objInstance: any) {
        return !(
            this.x < objInstance.x + objInstance.width &&
            this.x + this.width > objInstance.x &&
            this.y < objInstance.y + objInstance.height &&
            this.y + this.height > objInstance.y
        );
    }

    public render(object: any): void {
        this.canvasApi.fillStyle = this.color;
        this.canvasApi.fillRect(this.x, this.y, this.width, this.height);
        if(object) {
            if(this.collides(object)) {
                object.dx *= 1
                object.dy *= -1
            }
        }
    }
}
