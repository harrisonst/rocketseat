/*
 Capturar 2 números e fazer as operações matemáticas de
 soma, subtração, mulplicação, divisão e resto da divisão.
 Para cada operação mostrar um alerta com resultado.
*/

let firstNumber = prompt('Digite o primeiro número');
let secondNumber = prompt('Digite o segundo número');

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

const sum = firstNumber + secondNumber;
const sub =  firstNumber - secondNumber;
const multi = firstNumber * secondNumber;
const div = firstNumber / secondNumber;
const rest = firstNumber % secondNumber;

alert('Soma: ' + sum);
alert('Subtração: ' + sub);
alert('Multiplicação: ' + multi);
alert('Divisão: ' + div);
alert('Resto da divisão: ' + rest);
