import { Ball } from './lib/Ball';

window.onload = () => {
    let canvas = document.getElementById('canvas') as HTMLCanvasElement;
    let context = canvas.getContext('2d');
    let balls = new Array<Ball>();
    let originX = 0, originY = 0;
    let isMouseDown = false;
    let numBalls = 10;

    canvas.onmousedown = () => {
        isMouseDown = true;
    };

    window.onmouseup = () => {
        isMouseDown = false;
    };

    window.onmousemove = (event: MouseEvent) => {
        if (isMouseDown) {
            originX += event.movementX;
            originY += event.movementY;
        }
    };

    // Setup balls
    for (let i = 0; i < numBalls; i++) {
        let ball = new Ball(Math.random() * 25 + 25);
        ball.x = Math.random() * canvas.width;
        ball.y = Math.random() * canvas.height;
        balls.push(ball);
    }

    (function drawFrame() {
        window.requestAnimationFrame(drawFrame);
        context.clearRect(0, 0, canvas.width, canvas.height);

        context.save();
        context.translate(0.5, 0.5);

        context.save();
        context.translate(originX, originY);

        // Draw balls
        for (let ball of balls) {
            ball.draw(context);
        }

        context.restore();

        for (let i = originX % 30; i < canvas.width; i+= 30) {
            context.moveTo(i, 0);
            context.lineTo(i, canvas.height);
        }
        context.stroke();

        for (let i = originY % 30; i < canvas.height; i+= 30) {
            context.moveTo(0, i);
            context.lineTo(canvas.width, i);
        }
        context.stroke();

        context.restore();
    })();
};