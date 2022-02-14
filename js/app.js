function getColor() {
    let number = '0123456789ABCDEF'
    let hexcolor = '#'
    for (let i=0; i<6; i++) {
        hexcolor += number[Math.floor(Math.random() * 16)]
    }
    return hexcolor;
}


function setColor() {
    document.body.style.backgroundColor = getColor()
    document.getElementById("hexcode").textContent = getColor();
}

