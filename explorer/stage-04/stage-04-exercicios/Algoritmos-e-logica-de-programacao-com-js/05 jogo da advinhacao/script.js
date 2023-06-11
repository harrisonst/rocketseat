/*
  ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"

  Crie um lógica para gerar um número aleatório 
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas
*/

let result = prompt("Advinhe o número que estou pensando? Está entre 0 e 10")
const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1 //xtentativas. variavel de controle. Guarda o número de tentativas que digitei para encontrar o número randômico. Se o valor não for encontrado na primeira tentativa, ele será incrementado. Por isso, usarei abaixo xAttempts++

while(Number(result) != randomNumber) {
  result = prompt("Erro, tente novamente:")
  xAttempts++
}

if (xAttempts == 1){
  alert(`Uau! Parabéns! O número que eu pensei foi ${randomNumber} e você advinhou o número em apenas ${xAttempts} tentativa.`)

} else {
  alert(`Parabéns! O número que eu pensei foi ${randomNumber} e você advinhou o número em ${xAttempts} tentativas`)
}



