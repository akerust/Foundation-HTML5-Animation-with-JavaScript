import { Sprite } from './Sprite';

export class Ball extends Sprite {
    constructor(public radius: number = 25, color: string = '#000000') {
        super(color);
    }

    onDraw(context: CanvasRenderingContext2D) {
        context.arc(0, 0, this.radius, 0, Math.PI * 2, true);
    }
}
