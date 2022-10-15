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

let result = firstNote + secondNote + thirdNote;

if (firstNote + secondNote + thirdNote >= 6) {
  alert('Parabéns, ' + studentName + '. Sua nota é ' + result + '. Você foi aprovado!');

} else {
  alert('Olá, ' + studentName + '. Você foi reprovado. Não desanime. Sua nota é ' + result + '. Dê o seu melhor para a prova de recuperação!');
}


