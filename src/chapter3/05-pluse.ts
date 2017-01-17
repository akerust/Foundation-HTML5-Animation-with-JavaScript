import { Ball } from '../Ball';

window.onload = () => {
    var canvas = document.getElementById('canvas') as HTMLCanvasElement,
        context = canvas.getContext('2d'),
        ball = new Ball(),
        centerScale = 1,
        angle = 0,
        speed = 0.05,
        range = 0.5;

    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;

    (function drawFrame() {
        window.requestAnimationFrame(drawFrame);
        context.clearRect(0, 0, canvas.width, canvas.height);

        ball.scaleX = ball.scaleY = centerScale + Math.sin(angle) * range;
        angle += speed;
        ball.draw(context);
    })();
};