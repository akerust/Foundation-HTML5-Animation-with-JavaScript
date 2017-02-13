import { IPoint } from './lib/Point';
import { Ball } from './lib/Ball';


window.onload = () => {
    let canvas = document.getElementById('canvas') as HTMLCanvasElement,
        context = canvas.getContext('2d'),
        centerX = canvas.width / 2,
        centerY = canvas.height / 2,
        numBalls = 100,
        minimalVx = 1,
        vxRange = 5.0,
        minimalVy = 2,
        vyRange = 8,
        minimalRadius = 2,
        radiusRange = 8,
        G = 1.01,
        velocities = new Array<IPoint>(),
        balls = new Array<Ball>();
    
    // Setup
    for (let i = 0; i < numBalls; i++) {
        let ball = new Ball(minimalRadius + Math.random() * radiusRange);
        ball.x = centerX;
        ball.y = centerY;
        balls.push(ball);

        let vxSign = Math.random() > 0.5 ? 1 : -1;
        let vx = minimalVx + Math.random() * vxRange * vxSign;
        let vy = - (minimalVy + Math.random() * vyRange);
        velocities.push({
            x: vx,
            y: vy
        });
    }

    (function drawFrame() {
        window.requestAnimationFrame(drawFrame);

        context.clearRect(0, 0, canvas.width, canvas.height);

        balls.forEach((ball, index) => {
            ball.draw(context);

            ball.x += velocities[index].x;
            ball.y += velocities[index].y;
            velocities[index].y += G;

            if (ball.y - ball.radius > canvas.height) {
                ball.x = centerX;
                ball.y = centerY;
                velocities[index].y = - (minimalVy + Math.random() * vyRange);
            }
        });
    })();
};
