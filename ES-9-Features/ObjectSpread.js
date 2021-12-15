//The spread operator can be very useful to clone an array.

let colors = ['red', 'green', 'blue'];
let rgb = [...colors];
console.log(rgb); //[ 'red', 'green', 'blue' ]    

let rgb = [ 'red', 'green', 'blue' ];
let cmyk = ['cyan', 'magenta', 'yellow', 'black'];
let merge = [...rgb, ...cmyk];
console.log(merge); //[ 'red', 'green', 'blue', 'cyan', 'magenta', 'yellow', 'black' ]

const circle = {
    radius: 10
};
const coloredCircle = {
    ...circle,
    color: 'black'
};

console.log(coloredCircle);
//{
//     radius: 10,
//     color: 'black'
// }