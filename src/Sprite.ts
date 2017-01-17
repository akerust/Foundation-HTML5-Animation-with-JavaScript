import { parseColor } from './utils';

export abstract class Sprite {
    x = 0;
    y = 0;
    rotation = 0;
    scaleX = 1;
    scaleY = 1;
    lineWidth = 1;
    closePath = true;
    fillColor: string;
    strokeColor: string;

    constructor(fillColor: string = '#000000', strokeColor: string = '#000000') {
        this.fillColor = parseColor(fillColor) as string;
        this.strokeColor = parseColor(strokeColor) as string;
    }

    draw(context: CanvasRenderingContext2D) {
        context.save();

        context.translate(this.x, this.y);
        context.rotate(this.rotation);
        context.scale(this.scaleX, this.scaleY);
        context.lineWidth = this.lineWidth;
        context.strokeStyle = this.strokeColor;
        context.fillStyle = this.fillColor;

        context.beginPath();
        this.onDraw(context);
        if (this.closePath) {
            context.closePath();
        }
        if (this.fillColor) {
            context.fill();
        }
        if (this.lineWidth > 0) {
            context.stroke();
        }

        context.restore();
    }

    protected abstract onDraw(context: CanvasRenderingContext2D);
}
