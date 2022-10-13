// Control flow - controle de fluxo

if (true) {

} else {

};

let temperature = 37;
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37;

if (highTemperature) {
  console.log('Febre alta')
} else if (mediumTemperature) {
  console.log('Febre moderada')
} else {
  console.log('Saudavel')
}

// switch

let expression = ''
switch (expression){
  case 'a':
    console.log('a') //código
    break
  case 'b':
    console.log('b') //código para expressão b
    break
  default:
    console.log('default')
    break
}

function calculate (number1, operator, number2) {
  let result

  switch (operator) {
      case '+':
        result = number1 + number2
        break
      case '-':
        result = number1 - number2
        break
      case '*':
        result = number1 * number2
        break
      case '/':
        result = number1 / number2
        break
      default:
        console.log('não implementado')
        break
  }
  return result
}

console.log(calculate(4, '+', 2));



/*  THROW, TRY, CATCH
    Como no baiseol, significa que alguém vai lançar uma bola (throw) e que alguém vai tentar (try)
    capturar(catch) essa bola. Nós vamos executar um bloco de código e, se der algum
    erro, ele é disparado de maneira que posso capturá-lo na minha aplicação.
*/

// throw - siga a ordem numérica para enteder como o código foi construído

function sayMyName(name = ''){ // 1 - Suponha que eu tenha uma função na qual eu dispare um erro caso não haja parâmetro nesta função
  if (name === '') { // 2 - se o name for igual a vazio vou disparar um erro (throw), um objeto do tipo Error
    throw new Error ("Nome é obrigatório") // 3 - o operador new cria um objeto do tipo Error onde insiro uma mensagem
  }

  console.log(name) // 4 - se der erro, será disparado essa mensagem (Error)
}

// try...catch
try { // 5 - coloco um try e abro e fecho um bloco

  sayMyName ('Harrison') // 7 - crio a função vazia para testar o código. Em seguida leio o fluxo da aplicação

} catch (e) { // 6 - em seguida coloco um catch que recebe um parâmetro chamado 'e' e coloco um bloco de código para ele. Vamos para o passo 7 para           executarmos a função sayMyName             
  console.log(e); // 9 
}

console.log('após a função de erro, ou, após o try/catch'); // 10 - quando esta mensagem aparece no Console significa que deu certo.

/* 8 - O fluxo da aplicação será o seguinte:
 Função registrada em memória (function), daí vou tentar (try) executar a função. 
 O nome está vazio, daí a função vai para o throw (disparo/arremesso) e arremessa pra fora da função em direção ao catch
 O catch captura através do 'e'. Então eu uso o console.log e coloco nele o 'e'(9). Embaixo, deixo o console.log (10) que indica 'após a função de erro, ou, após o try/catch'.
*/

