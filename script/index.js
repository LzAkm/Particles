import {canvas, context} from './canvas.js';

/*import './test/carre.js';*/
/*import './test/rond.js';*/

export function draw_circle(x, y, r, color, fill){
    context.beginPath();

    if (fill) context.fillStyle = color;
    else context.strokeStyle = color;

    context.arc(x, y, r, 0, Math.PI * 2,);

    if (fill) context.fill();
    else context.stroke();

    context.closePath();
}

function get_random_number (min, max){
    return Math.random() * (max-min) + min; 
}

const particles = [];
const particles_count = 130;
const particles_count2 = 50;

for(let i=0; i < particles_count; i++){
    let colors = ['red','orange','yellow'];
    const particle = {
        x : get_random_number(0, canvas.width),
        y : get_random_number(0,canvas.height),
        size : get_random_number(5,50),
        speed : get_random_number(2,12),
        color :colors[Math.floor(Math.random() * colors.length)],
        direction : get_random_number(0, Math.PI),
    };
    particles.push(particle)
}

for(let i=0; i < particles_count2; i++){
    let colors = ['red','orange','yellow',];
    const particle2 = {
        x : get_random_number(0, canvas.width),
        y : get_random_number(0,canvas.height),
        size : get_random_number(0,12),
        speed : get_random_number(2,12),
        color :colors[Math.floor(Math.random() * colors.length)],
        direction : get_random_number(0, Math.PI * 2),
    };
    particles.push(particle2)
}

function update(){
    for(let i=0; i < particles_count; i++){

        // Deplacement de la particule
        particles[i].x += Math.cos(particles[i].direction) * particles[i].speed;
        particles[i].y += Math.sin(particles[i].direction) * particles[i].speed;
        particles[i].size = Math.random() * 30;

        // Si la particule sort à DROITE de l'écran
        if (particles[i].x - particles[i].size > canvas.width) {
        particles[i].x = - particles[i].size;
        }

        // Si elle sort en BAS de l'écran
        if (particles[i].y - particles[i].size > canvas.height) {
        particles[i].y = - particles[i].size;
        }

        // Si elle sort à GAUCHE de l'écran
        if (particles[i].x + particles[i].size < 0) {
        particles[i].x = canvas.width + particles[i].size;
        }

        // Si elle sort en HAUT de l'écran
        if (particles[i].y + particles[i].size < 0) {
        particles[i].y = canvas.height + particles[i].size;
        }
    }
}

function render(){
    // efface le canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    for(let i=0; i < particles.length; i++){
        draw_circle(
            particles[i].x,
            particles[i].y,
            particles[i].size,
            particles[i].color,
            true
        )
    }
}

function run (){
    update();
    render();
    
    requestAnimationFrame(run);
}

requestAnimationFrame(run);