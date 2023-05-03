import Level from "./level";
import Paddle from "./paddle";
import Ball from "./ball";

interface EngineInterface {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
}

export default class Engine implements EngineInterface {
    canvas;
    context;
    ball = {
        width: 10,
        height: 10,
    };
    paddle = {
        width: 100,
        height: 10,
    };
    Level: Level;
    Paddle: Paddle;
    Ball: Ball;

    constructor() {
        this.canvas = document.querySelector("canvas") as HTMLCanvasElement;
        this.context = this.canvas.getContext("2d") as CanvasRenderingContext2D;
        this.Level = new Level(this.context);
        this.Paddle = new Paddle(
            this.paddle.width,
            this.paddle.height,
            this.canvas.width / 2 - this.paddle.width / 2,
            this.canvas.height - this.paddle.height,
            "yellow",
            this.context
        );
        this.Ball = new Ball(
            this.ball.width,
            this.ball.height,
            this.canvas.width / 2 - this.ball.width / 2,
            this.canvas.height - this.paddle.height * 2,
            "black",
            2,
            this.context
        );
    }

    public start(): void {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.Ball.render();
        this.Paddle.render(this.Ball);
        this.Level.render(this.Ball);

        
        this.gameFieldCollision()
        this.renderField();


        requestAnimationFrame(() => this.start());
    }

    private gameFieldCollision(): void {
        if(this.Ball.collides({ x: 0, y: 0, width: this.canvas.width, height: this.canvas.height })) {
            if(this.Ball.y < 0) {
                this.Ball.dx *= 1
                this.Ball.dy *= -1
            }else{
                this.Ball.dx *= -1
                this.Ball.dy *= 1
            }
        }
    }

    private renderField(): void {
        this.context.beginPath();
        this.context.fillStyle = "red";
        this.context.fillRect(0, 0, this.canvas.width, 4);
        this.context.fillRect(0, 0, 4, this.canvas.height);
        this.context.fillRect(this.canvas.width - 4, 0, 4, this.canvas.height);
    }
}
