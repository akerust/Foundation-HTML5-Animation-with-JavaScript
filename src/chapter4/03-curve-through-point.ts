import { captureMouse } from '../utils';

window.onload = () => {
    let canvas = document.getElementById('canvas') as HTMLCanvasElement,
        context = canvas.getContext('2d'),
        mouse = captureMouse(canvas),
        x0 = 100,
        y0 = 200,
        x2 = 300,
        y2 = 200;

    canvas.addEventListener('mousemove', function () {
        context.clearRect(0, 0, canvas.width, canvas.height);

        let x1 = mouse.x * 2 - (x0 + x2) / 2,
            y1 = mouse.y * 2 - (y0 + y2) / 2;

        context.beginPath();
        context.moveTo(x0, y0);
        context.quadraticCurveTo(x1, y1, x2, y2);
        context.stroke();
    }, false);
};
