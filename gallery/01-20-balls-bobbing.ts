import { Ball } from './lib/Ball';

window.onload = () => {
    var canvas = document.getElementById('canvas') as HTMLCanvasElement,
        context = canvas.getContext('2d'),
        balls = new Array<Ball>(),
        angle = 0,
        angles = new Array<number>();

    // Setup
    for (let i = 0; i < 20; i++) {
        let ball = new Ball(10);
        ball.x = 20 + i * 25;
        ball.y = canvas.height / 2 + Math.sin(angle) * 50;
        balls.push(ball);
        angles.push(angle);
        angle += 0.2;
    }

    (function drawFrame() {
        window.requestAnimationFrame(drawFrame);
        context.clearRect(0, 0, canvas.width, canvas.height);

        balls.forEach((ball, index) => {
            angles[index] += 0.1;
            ball.y = canvas.height / 2 + Math.sin(angles[index]) * 50;
            ball.draw(context);
        });
    })();
};