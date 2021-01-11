// El metodo forEach ejecuta una funcion una vez por cada elemento de mi arreglo, en orde.

const numbers = [1, 2, 3];

function saludo(element, index, array) {
    //suma += element;
    console.log(element, index, array)
}

const angel = {}
angel.each = (array, fn) => {
    for(let i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }
}

let suma = 0;
angel.each(numbers, saludo);
numbers.forEach((element, index, array) => {
    console.log(element, index, array)
})
//console.log(suma);

function x() {
    return 3;
}
var a = x();
var b = x;
console.log(a,b)