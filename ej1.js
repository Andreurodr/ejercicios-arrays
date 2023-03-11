// ¿Cómo acceder al primer elemento de un array? Dime 4 opciones

let array = [1, 3, 5, 7];
console.log(array[0]);
console.log(array.shift());
array.unshift(3);
console.log(arr.reverse()[arr.length - 1]);
arr.reverse();
console.log(arr.slice(0, 1)[0]);
console.log(arr.splice(0, 1)[0]);

// console.log(array[array.length - array.length]);
// console.log(array[array.indexOf(1)]);
// console.log(array[array.lastIndexOf(1)]); estos no sirven ya que no sirven para todos los arrays.



// ¿Cómo acceder al último elemento de un array? Dime 4 opciones

let arrayB = [5, 10, 15, 20];
console.log(arrayB[3]);
console.log(arrayB[arrayB.length - 1]);
console.log(arrayB.slice(-1)[0]);
console.log(arrayB.pop());
arrayB.push(5);
console.log(arrayB.splice(arrayB.length - 1, 1)[0]);
console.log(arrayB.reverse()[0]);
// console.log(arrayB[arrayB.indexOf(20)]);
// console.log(arrayB[arrayB.lastIndexOf(20)]);
// estos no sirven ya que no sirven para todos los arrays.