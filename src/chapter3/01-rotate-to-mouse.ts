import { captureMouse } from '../utils';
import { Arrow } from '../Arrow';

window.onload = () => {
    var canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement,
        context = canvas.getContext('2d'),
        mouse = captureMouse(canvas),
        arrow = new Arrow();

    arrow.x = canvas.width / 2;
    arrow.y = canvas.height / 2;

    (function drawFrame() {
        window.requestAnimationFrame(drawFrame);
        context.clearRect(0, 0, canvas.width, canvas.height);

        var dx = mouse.x - arrow.x,
            dy = mouse.y - arrow.y;

        arrow.rotation = Math.atan2(dy, dx);
        arrow.draw(context);
    })();
}