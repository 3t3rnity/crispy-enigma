import Entity from "./entity";

export default class ballCore extends Entity {
    speed: number;
    dx: number = 0;
    dy: number = 0;

    constructor(
        width: number,
        height: number,
        x: number,
        y: number,
        color: string,
        speed: number,
        canvasApi: CanvasRenderingContext2D
    ) {
        super(width, height, x, y, color, canvasApi);
        this.speed = speed;
        this.push()
    }

    public push(): void {
        if (this.dx === 0 && this.dy === 0) {
            this.dx = this.speed;
            this.dy = -this.speed;
        }
    }

    public render(): void {
        this.x += this.dx;
        this.y += this.dy;

        this.canvasApi.beginPath();
        this.canvasApi.fillStyle = this.color;
        this.canvasApi.roundRect(this.x, this.y, this.width, this.height, 10);
        this.canvasApi.fill();
    }
}
