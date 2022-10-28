//

let number1 = prompt('Insira o primeiro número')
let number2 = prompt('Insira o segundo número')
number1 = Number(number1)
number2 = Number(number2)

alert(`A soma dos dois números é ${number1 + number2}`)
alert (`A subtração dos dois números é ${number1 - number2}`)
alert (`A multiplicação dos dois números é ${number1 * number2}`)
alert(`A divisão dos dois números é ${(number1 / number2).toFixed(2)}`)
alert(`O resto da divisão dos dois números é ${number1 % number2}`)

if (number1 % number2 === 0) {
  alert(`A soma dos números é par`)
} else {
  alert(`A soma dos dois números é ímpar`)
}

if (number1 === number2) {
  alert (`Os dois números são iguais`)
} else {
  alert (`Os dois números são diferentes`)
}

