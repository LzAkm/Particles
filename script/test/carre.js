import {context} from '../canvas.js';

context.fillStyle = 'white';
context.fillRect(100, 100, 50, 50);

context.fillStyle = 'red';
context.fillRect(200, 200, 100, 100);

context.strokeStyle = "blue";
context.lineWidth = 3;
context.strokeRect(300,300,200,200);