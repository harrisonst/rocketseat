/* Expressões e Operadores

- Expressions

  Expressão é qualquer linha de código que resolve alguma questão, por exemplo, 
  let number = 1 

- Operators
  Binary
  Unary
  Ternary

  Binary - trabalha com dois valores, por exemplo, 
  let number = 1;
  console.log(number + 1);

  Unary - apenas um operador, por exemplo, 
    - com incremento
      console.log(++number)

    - com decremento
      console.log(--number)

    - console.log (typeOf number)

  Ternário - recebe três exppressões para que algo seja definido. Por exemplo, numa expressão true, então ele faz 'alo', senão, 'nada' :
    console.log (true ? 'alo' : 'nada');

 */

/*  new
    
    * left-hand-side expression
    * criar um novo objeto
    
    cria novo objeto e usa as funções construtoras que já temos por padrão no js
*/
let name = new String('Joao');
let age = new Number('22');
console.log(name, age);

name.surName = 'Brito'
console.log(name.surName, age);

let date = new Date ('2022-10-12');
console.log(date.__proto__);

// Operadores Unários
// typeof
// delete

let nameTypeof = 'Chico'
console.log(typeof nameTypeof);

const person = {
  name: 'Joao',
  age: 25,
}
console.log(person);
console.log(person.age);

delete person.age;
console.log(person);

//  Operadores Aritméticos:

// multiplicação
console.log(3 * 2);
console.log (5.5 * 4.56);

// divisão
console.log(12 / 4);

// soma
console.log(3 + 5);

//subtração
console.log (34 - 23);

// resto da divisão
let reminder
reminder = 11 % 10
console.log(reminder);

// increment
let increment = 0;
console.log(++increment)

// decrement
let decrement = 0
console.log(--decrement);

// exponencial
console.log(3 ** 3);

// Grouping operator
let total = (2 + 3) * 5;
console.log(total);

// Operadores de Comparação

// Irá comparar valores e retornar um boolean como resposta à comparação
let first = 1;
let second = 2;
console.log(first != second);
console.log(first != 1);
console.log(first != '1');


// Operadores de atribuição (Assignment)
let x;
console.log(x);

// assignment
x = 2;
console.log(x);

// addition assignment
x += 2; // equivale a x = x + 2
console.log(x);

// subtration assignment
x -= 2;     // equivale a: x = x - 2
console.log(x);

// multiplication assignment
x *= 2;     // equivale a: x = x * 2
console.log(x);

// divison assignment
x /= 2;     // equivale a: x = X / 2
console.log(x);

// exponencial assignment
x **= 2;    // equivale a: x = x ** 2
console.log(x);

// Operadores lógicos - boolean
// AND &&   
let queijo = true;
let pao = false;
console.log(pao && queijo);

// OR ||    
let cafe = true;
let cha = true;
console.log(cafe || cha);

// NOT !  
let biscoito = true;
let bolacha = true;
console.log(biscoito || bolacha);

// Operador condicional
// Café da manhã top
let paoIntegral = true;
let queijoMinas = true;

const niceBreakfast = paoIntegral && queijoMinas ? "Café top" : "Café ruim";
console.log(niceBreakfast);

// Maior de 18
let agePlus = 17;
const canDrive = agePlus >= 18 ? "pode dirigir" : "não pode dirigir"
console.log(canDrive);

// Operadores para Strings - String operator
// comparasion (comparação)
console.log('agua' == 'terra');

// concatenation (concatenação). Retorna a união de duas strings
console.log('a' + 'a'); // console: aa

let alpha = 'alpha';
console.log (alpha + 'bet'); // console: alphabet

console.log(alpha += 'bet'); // console: alphabet

console.log(alpha + 345); // console: alpha345

/*  Falsy e Truthy

    FALSY(não confiável): 
    Um valor é considerado FALSY em um contexto onde o boolean 
    é obrigatório (condicionais e loops)
    false
    0
    -0
    ""
    null
    undefined
    NaN
*/
console.log(false ? 'verdadeiro' : 'falso');
console.log(0 ? 'verdadeiro' : 'falso');
console.log(-0 ? 'verdadeiro' : 'falso');
console.log('' ? 'verdadeiro' : 'falso');
console.log(null ? 'verdadeiro' : 'falso');
console.log(undefined ? 'verdadeiro' : 'falso');
console.log(NaN ? 'verdadeiro' : 'falso'); // todos consolam false

/*  TRUTHY(confiável): Um valor é considerado TRUTHY em um contexto onde o boolean 
    é obrigatório (condicionais e loops)
    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/
console.log(true ? 'verdadeiro' : 'falso');
console.log({} ? 'verdadeiro' : 'falso');
console.log([] ? 'verdadeiro' : 'falso');
console.log( 1 ? 'verdadeiro' : 'falso');
console.log(3.23 ? 'verdadeiro' : 'falso');
console.log("0" ? 'verdadeiro' : 'falso');
console.log("false" ? 'verdadeiro' : 'falso');
console.log(-1 ? 'verdadeiro' : 'falso');
console.log(Infinity ? 'verdadeiro' : 'falso');
console.log(-Infinity ? 'verdadeiro' : 'falso'); // todos consolam true

/* Operator precedence

  Operadores precedentes. Começa com o mais importante para o menos importante

  * grouping                    ( )
  * negação e incremento        ! ++ --
  * multiplicação e divisão     * /
  * adição e subtração          + - 
  * relacional                  < <= > >=
  * igualdade                   == != === !==
  * AND                         &&
  * OR                          ||
  * condicioal                  ? :
  * assignment                  = += -= *= 
*/

