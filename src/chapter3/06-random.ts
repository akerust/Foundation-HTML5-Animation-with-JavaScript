import { Ball } from '../Ball';

window.onload = () => {
    var canvas = document.getElementById('canvas') as HTMLCanvasElement,
        context = canvas.getContext('2d'),
        ball = new Ball(),
        angleX = 0,
        angleY = 0,
        xspeed = 0.11,
        yspeed = 0.07,
        range = 200;

    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;

    (function drawFrame() {
        window.requestAnimationFrame(drawFrame);
        context.clearRect(0, 0, canvas.width, canvas.height);

        ball.x = canvas.height / 2 + Math.sin(angleX) * range;
        ball.y = canvas.height / 2 + Math.sin(angleY) * range;
        angleX += xspeed;
        angleY += yspeed;
        ball.draw(context);
    })();
};