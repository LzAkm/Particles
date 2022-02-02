import {context} from './canvas.js';

export function draw_circle(x, y, r, color, fill){
    context.beginPath();

    if (fill) context.fillStyle = color;
    else context.strokeStyle = color;

    context.arc(x, y, r, 0, Math.PI * 2,);

    if (fill) context.fill();
    else context.stroke();

    context.closePath();
}

export function get_random_number (min, max){
    return Math.random() * (max-min) + min; 
}