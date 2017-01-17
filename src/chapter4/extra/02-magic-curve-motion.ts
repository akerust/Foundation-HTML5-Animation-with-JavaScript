import { MagicCurve } from './MagicCurve';

window.onload = () => {
    let body = document.getElementsByTagName('body')[0],
        canvas = document.getElementById('canvas') as HTMLCanvasElement,
        context = canvas.getContext('2d'),
        xspeed = Math.random() * 0.005 + 0.005,
        yspeed = Math.random() * 0.005 + 0.005,
        rspeed = Math.random() * 0.005 + 0.005,
        centerX = canvas.width / 2,
        centerY = canvas.height / 2,
        range = 200,
        angleX = 0,
        angleY = 0,
        magicCurve = new MagicCurve('rgba(222, 222, 222, 0.8)');

    body.style.backgroundColor = '#000000';
    canvas.style.backgroundColor = '#000000';

    magicCurve.x = canvas.width / 2;
    magicCurve.y = canvas.height / 2;

    (function drawFrame() {
        window.requestAnimationFrame(drawFrame);

        magicCurve.x = centerX + Math.sin(angleX) * range;
        magicCurve.y = centerY + Math.sin(angleY) * range;
        
        magicCurve.rotation += rspeed;

        angleX += xspeed;
        angleY += yspeed;

        magicCurve.draw(context);
    })();
};
