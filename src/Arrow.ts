import { Sprite } from './Sprite';

export class Arrow extends Sprite {
    lineWidth = 0;

    onDraw(context: CanvasRenderingContext2D) {
        context.moveTo(-50, -25);
        context.lineTo(0, -25);
        context.lineTo(0, -50);
        context.lineTo(50, 0);
        context.lineTo(0, 50);
        context.lineTo(0, 25);
        context.lineTo(-50, 25);
        context.lineTo(-50, -25);
    }
}
