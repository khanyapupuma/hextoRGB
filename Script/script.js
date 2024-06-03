function hexToRgbComponents(hex) {
    hex = hex.replace(/^#/, '');
    
    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;
    let black = Math.min(r, g, b);
    return { r, g, b, black };
}
let hexColor = "#3498db";
let colorComponents = hexToRgbComponents(hexColor);
console.log(colorComponents);













