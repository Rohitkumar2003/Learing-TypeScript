// ! Enums

enum Colors {
    color_1 = 'Green',
    color_2 = 'Blue',
    color_3 = 'Gray',
    color_4 = 'Pink',
}

console.log(Colors.color_2);

// const sm = 28;
// const md = 32;
// const lg = 38;


// let size = md;

 export enum Size { 
    sm = 1,
    md = 2,
    lg = 3,
}

let size:Size = Size.lg;
console.log('Size: ', size);