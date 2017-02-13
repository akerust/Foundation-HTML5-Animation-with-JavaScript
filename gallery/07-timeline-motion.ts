window.onload = () => {
    let canvas = document.getElementById('canvas') as HTMLCanvasElement;
    let context = canvas.getContext('2d');
    let centerY = canvas.height / 2;
    let timeline = 0; // Viewport
    let speed = 0;
    let maxSpeed = 20;
    let accelration = 5;
    let friction = 0.95;
    let interval = 50.0;
    let halfHeight = 5.0;
    let sequence: number;

    window.onkeydown = (event: KeyboardEvent) => {
        if (event.keyCode === 37 && speed > -maxSpeed) {  // Left arrow
            speed -= accelration;
        } else if (event.keyCode === 39 && speed < maxSpeed) {  // Right arrow
            speed += accelration;
        }
        console.log(speed);
    };

    (function drawFrame() {
        window.requestAnimationFrame(drawFrame);
        context.clearRect(0, 0, canvas.width, canvas.height);

        context.save();
        context.translate(0.5, 0.5);

        context.beginPath();

        context.moveTo(0, centerY);
        context.lineTo(canvas.width, centerY);

        context.save();
        context.translate(timeline, 0);

        let start = -(timeline + (interval - timeline % interval));

        for (let i = start; i <= (start + canvas.width + interval); i += interval) {
            sequence = Math.round(i) / interval;
            context.fillText(sequence.toString(), i, centerY + halfHeight * 3);
        }

        context.restore();

        for (let i = timeline % interval; i < canvas.width; i += interval) {
            context.moveTo(i, centerY - halfHeight);
            context.lineTo(i, centerY + halfHeight);
        }

        timeline += speed;
        speed *= 0.95;

        if (Math.abs(speed) < 0.01) {
            speed = 0;
        }

        context.stroke();

        context.restore();
    })();
};