import {canvas,context} from '../canvas.js';

function draw_circle(x, y, r, color, fill){
    context.beginPath();
    if (fill) context.fillStyle = color;
    else context.strokeStyle = color;

    context.arc(
        x, 
        y, 
        r, 
        0, 
        Math.PI * 2,);

    if (fill) context.fill();
    else context.stroke();
    context.closePath();
}

draw_circle(300, 200, 70, 'red', true);
draw_circle(350, 250, 70, 'orange', true);
draw_circle(150, 100, 70, 'yellow', false);
draw_circle(100, 150, 60, 'red', false);


// Création d'un disque
context.beginPath()
context.fillStyle = 'yellow';
context.arc(
    canvas.width/2, // x du centre du cercle
    canvas.height/2, // y du centre du cercle
    60, //rayon du cercle
    0, // angle de départ de l'arc
    Math.PI * 2, // angle de fin de l'arc 
    // Math.PI donne un demi cercle
);
context.fill();
context.closePath()

// Création d'un cercle
context.beginPath();
context.arc(
    150, 
    150, 
    90, 
    0, 
    Math.PI * 2, 
)
context.strokeStyle = 'orange';
context.lineWidth = 3;
context.stroke()
context.closePath();