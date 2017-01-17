import { Ball } from '../Ball';

window.onload = () => {
    var canvas = document.getElementById('canvas') as HTMLCanvasElement,
        context = canvas.getContext('2d'),
        ball = new Ball(),
        angle = 0,
        xspeed = 1,
        yspeed = 0.1,
        range = 50;

    ball.x = 0;
    ball.y = canvas.height / 2;

    (function drawFrame() {
        window.requestAnimationFrame(drawFrame);
        context.clearRect(0, 0, canvas.width, canvas.height);

        ball.x += xspeed;
        ball.y = canvas.height / 2 + Math.sin(angle) * range;
        angle += yspeed;
        ball.draw(context);
    })();
};