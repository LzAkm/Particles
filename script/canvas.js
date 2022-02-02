export const canvas =  document.createElement('canvas'); 
export const context = canvas.getContext('2d');

canvas.width = 1350;
canvas.height = 640;

canvas.style.backgroundColor = 'black';

// ajout du canvas au DOM
document.body.appendChild(canvas);

