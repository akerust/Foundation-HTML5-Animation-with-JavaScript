import { MagicCurve } from './lib/MagicCurve';

window.onload = () => {
    let canvas = document.getElementById('canvas') as HTMLCanvasElement,
        context = canvas.getContext('2d'),
        magicCurve = new MagicCurve();

    magicCurve.x = canvas.width / 2;
    magicCurve.y = canvas.height / 2;

    (function drawFrame() {
        window.requestAnimationFrame(drawFrame);
        context.clearRect(0, 0, canvas.width, canvas.height);

        magicCurve.draw(context);
    })();
};
