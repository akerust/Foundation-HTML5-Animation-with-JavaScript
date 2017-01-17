import { parseColor } from './utils';

export abstract class Sprite {
    x = 0;
    y = 0;
    rotation = 0;
    scaleX = 1;
    scaleY = 1;
    lineWidth = 1;
    color: string;

    constructor(color: string = '#000000') {
        this.color = parseColor(color) as string;
    }

    draw(context: CanvasRenderingContext2D) {
        context.save();

        context.translate(this.x, this.y);
        context.rotate(this.rotation);
        context.scale(this.scaleX, this.scaleY);
        context.lineWidth = this.lineWidth;
        context.fillStyle = this.color;

        context.beginPath();
        this.onDraw(context);
        context.closePath();
        context.fill();
        if (this.lineWidth > 0) {
            context.stroke();
        }

        context.restore();
    }

    protected abstract onDraw(context: CanvasRenderingContext2D);
}
