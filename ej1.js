// ¿Cómo acceder al primer elemento de un array? Dime 4 opciones

let array = [1, 3, 5, 7];
console.log(array[0]);
console.log(array[array.length - array.length]);
console.log(array[array.indexOf(1)]);
console.log(array[array.lastIndexOf(1)]);

// ¿Cómo acceder al último elemento de un array? Dime 4 opciones

let arrayB = [5, 10, 15, 20];
console.log(arrayB[3]);
console.log(arrayB[arrayB.length - 1]);
console.log(arrayB[arrayB.indexOf(20)]);
console.log(arrayB[arrayB.lastIndexOf(20)]);