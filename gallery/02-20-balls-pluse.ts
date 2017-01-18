import { Ball } from './lib/Ball';

window.onload = () => {
    var canvas = document.getElementById('canvas') as HTMLCanvasElement,
        context = canvas.getContext('2d'),
        balls = new Array<Ball>(),
        angle = 0,
        angles = new Array<number>(),
        fall = 0.2,
        speed = 0.1,
        range = 0.5,
        centerScale = 1;

    // Setup
    for (let i = 0; i < 20; i++) {
        let ball = new Ball(10);
        ball.x = 20 + i * 30;
        ball.y = canvas.height / 2;;
        balls.push(ball);
        angles.push(angle);
        angle += fall;
    }

    (function drawFrame() {
        window.requestAnimationFrame(drawFrame);
        context.clearRect(0, 0, canvas.width, canvas.height);

        balls.forEach((ball, index) => {
            angles[index] += speed;
            ball.scaleX = ball.scaleY = centerScale + Math.sin(angles[index]) * range;
            ball.draw(context);
        });
    })();
};