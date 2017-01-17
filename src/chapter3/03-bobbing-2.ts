import { Ball } from '../Ball';

window.onload = () => {
    var canvas = document.getElementById('canvas') as HTMLCanvasElement,
        context = canvas.getContext('2d'),
        ball = new Ball(),
        angle = 0,
        speed = 0.1,
        range = 50;

    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;

    (function drawFrame() {
        window.requestAnimationFrame(drawFrame);
        context.clearRect(0, 0, canvas.width, canvas.height);

        ball.y = canvas.height / 2 + Math.sin(angle) * range;
        angle += speed;
        ball.draw(context);
    })();
};