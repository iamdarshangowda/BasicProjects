let hexcode = document.querySelector(".hexcolor")

function generateColor() {
let number = '0123456789ABCDEF'
let color = '#'
for (let i=0; i<6; i++) {
color += number[Math.floor(Math.random() * 16)]
}
return color;
}

hexcode.textContent = generateColor();

function setColor() {
document.body.style.backgroundColor = generateColor();
}