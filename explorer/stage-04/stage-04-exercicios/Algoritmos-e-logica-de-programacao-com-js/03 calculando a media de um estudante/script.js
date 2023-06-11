/*
    Solicitar o nome do aluno e as 3 notas do bimestre e calcular sua média.

    A média positiva deverá ser maior que 6.

    Se o aluno passou no bimestre, dê os parabéns

    Se o aluno não passou no bimestre, motive-o a dar o seu melhor na prova de recuperação.

    Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

let studentName = prompt ('Nome do aluno');
let firstNote = prompt('Informe a primeita nota');
let secondNote = prompt('Informe a segunda nota');
let thirdNote = prompt('Informe a terceira nota');

firstNote = Number(firstNote);
secondNote = Number(secondNote);
thirdNote = Number(thirdNote);

let result = ((firstNote + secondNote + thirdNote) / 3);

result = result.toFixed(2).replace('.', ',')

if (result >= 6) {
  alert('Parabéns, ' + studentName + '. Sua média bimestral é ' + result + '. Você foi aprovado!');

} else {
  alert('Olá, ' + studentName + '. Não foi desta vez. Estude para sua prova de recuperação. Sua média bimestral é ' + result);
}

/*    let average = (Number(firstNote) + Number(secondNote) + Number(thirdNote)) / 3;
      let result = average > 6

      pay attention: result.toFixed(2).replace('.',',')
 */
