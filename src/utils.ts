import { IPoint } from './Point';
import { ITouch } from './Touch';

export function captureMouse(element: HTMLElement): IPoint {
    let mouse: IPoint = {
        x: 0,
        y: 0
    };

    element.addEventListener('mousemove', function (event: MouseEvent) {
        let x: number, y: number;
        if (event.pageX || event.pageY) {
            x = event.pageX;
            y = event.pageY;
        } else {
            x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }

        x -= element.offsetLeft;
        y -= element.offsetTop;

        mouse.x = x;
        mouse.y = y;
    }, false);

    return mouse;
};

export function captureTouch(element: HTMLElement): ITouch {
    let touch: ITouch = {
        x: null,
        y: null,
        isPressed: false
    };

    element.addEventListener('touchstart', function (event: TouchEvent) {
        touch.isPressed = true;
    }, false);

    element.addEventListener('touchend', function (event: TouchEvent) {
        touch.isPressed = false;
        touch.x = null;
        touch.y = null;
    }, false);

    element.addEventListener('touchmove', function (event: TouchEvent) {
        let x: number, y: number, touchEvent = event.touches[0];

        if (touchEvent.pageX || touchEvent.pageY) {
            x = touchEvent.pageX;
            y = touchEvent.pageY;
        } else {
            x = touchEvent.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            y = touchEvent.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        x -= element.offsetLeft;
        y -= element.offsetTop;

        touch.x = x;
        touch.y = y;
    }, false);

    return touch;
}
