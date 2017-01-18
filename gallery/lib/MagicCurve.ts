import { Sprite } from './Sprite';
import { IPoint } from './Point';

export class MagicCurve extends Sprite {
    static NUM_CTRL_POINTS = 5;
    static MINIMAL_HEIGHT = 100;
    static HEIGHT_RANGE = 50;
    static MINIMAL_SPEED = 0.01;
    static SPEED_RANGE = 0.05;
    static MINIMAL_AMPLITUDE = 1;
    static AMPLITUDE_RANGE = 5;

    closePath = false;
    rotation = Math.PI / 2;
    
    angles = new Array<number>();
    ranges = new Array<number>();
    speeds = new Array<number>();
    points = new Array<IPoint>();

    constructor(public strokeColor: string = '#000000') {
        super(null, strokeColor);
        for (let i = 0; i < MagicCurve.NUM_CTRL_POINTS; i++) {
            this.angles.push(Math.random() * Math.PI * 2);

            let range = Math.random() * MagicCurve.AMPLITUDE_RANGE + MagicCurve.MINIMAL_AMPLITUDE;
            this.ranges.push(range);

            let speed = Math.random() * MagicCurve.SPEED_RANGE + MagicCurve.MINIMAL_SPEED;
            this.speeds.push(speed);

            let y = Math.random() * MagicCurve.HEIGHT_RANGE + i * MagicCurve.MINIMAL_HEIGHT;
            let point = {
                x: 0,
                y: y
            };

            this.points.push(point);
        }
    }

    onDraw(context: CanvasRenderingContext2D) {
        this.next();

        let ctrlPoint = {
            x: null,
            y: null
        };

        context.moveTo(this.points[0].x, this.points[0].y);
        for (var i = 1; i < MagicCurve.NUM_CTRL_POINTS - 2; i++) {
            ctrlPoint.x = (this.points[i].x + this.points[i + 1].x) / 2;
            ctrlPoint.y = (this.points[i].y + this.points[i + 1].y) / 2;
            context.quadraticCurveTo(this.points[i].x, this.points[i].y, ctrlPoint.x, ctrlPoint.y);
        }
        context.quadraticCurveTo(this.points[i].x, this.points[i].y, this.points[i + 1].x, this.points[i + 1].y);
    }

    protected next() {
        for (let i = 0; i < MagicCurve.NUM_CTRL_POINTS; i++) {
            this.angles[i] += this.speeds[i];
            this.points[i].x += Math.sin(this.angles[i]) * this.ranges[i];
        }
    }
}
