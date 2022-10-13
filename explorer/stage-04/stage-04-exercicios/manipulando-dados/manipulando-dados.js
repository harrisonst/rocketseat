// Manipulando Strings e Números 


// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número
let word = "Paralelepipedo"
console.log(word.length)

let number = 1234;
console.log(String(number).length);

// Método replace. Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
let numberExemple = 59.349847387493;
console.log(numberExemple.toFixed(2).replace("." , ","));

// Método upercase. Transformar letras maiúsculas em minúsculas e vice versa
let wordPhrase = "programar é bom!";
console.log(wordPhrase.toUpperCase());

// Transformar letras maiúsculas em minúsculas
console.log(wordPhrase.toLowerCase());

/* Método split. 
Separando Strings. Separe um texto que contém espacos em um novo array 
onde cada texto é uma posição do array. Depois, transforme o array em um texto
e onde eram espaços coloque _ 
  O método split separa automaticamente o array. Entre parênteses coloco a foma como quero 
que essa separação seja feita 
*/
let phrase = "Estudo porque quero aprender JavaScript!";
let myArray = phrase.split(" ");
console.log(myArray);

// Método join. Junta automaticamente o array. Entre parênteses coloco a foma como quero 
//   que essa junção seja feita.
let phraseString = "Estudo porque quero aprender JavaScript!";
let myArrayString = phraseString.split(" ")
let phraseWithUnderscore = myArrayString.join ("_")
console.log(phraseWithUnderscore);

// podemos concatenar métodos como em .join e, depois, .toLowerCase no array.
let phraseString2 = "Estudo porque quero aprender JavaScript!";
let myArrayString2 = phraseString2.split(" ")
let phraseWithUnderscore2 = myArrayString2.join ("_")
console.log(phraseWithUnderscore2.toLowerCase());

// Método includes. encontrando palavras em frases
// Verificar se o texto contém a palavra JavaScript.
let phraseJavaSript = "Programar em javascript é bom!"
console.log(phraseJavaSript.includes("JavaScript")); // o método includes é boolean e case sensitive

// criar um array com o construtor
let myArrayWithConstructor = new Array ('huguinho', 'Zezinho', 'Luizinho');
console.log(myArrayWithConstructor);

// contar elementos do Array
console.log(['a','b','c'].length);

// Método from. Strings para Arrays.
// Transformar uma cadeia de caracteres em elemtnos de um array:
let stringToArray = 'manipulacao';
console.log(Array.from(stringToArray));

// Manipulação de Arrays
  // Método push. Adicionar um item no fim
  let techs = ['html', 'css', 'js'];
  techs.push('nodejs');
  console.log(techs);

  // Método unshift. Adicionar no começo
  let techs1 = ['html', 'css', 'js'];
  techs1.unshift('squl');
  console.log(techs1);

  // Método pop. Remover do fim
  let techs2 = ['html', 'css', 'js'];
  techs2.pop();
  console.log(techs2);

  // Méotdo shift. Remover do começo
  let techs3 = ['html', 'css', 'js'];
  techs3.shift();
  console.log(techs3);

  // Método slice. Retirar somente alguns elementos do array
  // Usar o método .slice que conta o número de elementos e não das posições.
  // Neste caso (1,2) método conta da posição 1 até a posição 2 e retira o elemento da posição 1 até a posição 2
  let techs4 = ['html', 'css', 'js', 'sql', 'nodejs','react'];
  console.log(techs4.slice(3,6));

  // Método splice. Remover 1 ou mais intens em qualquer posição do array
  let techs5 = ['html', 'css', 'js', 'sql', 'nodejs'];
  techs5.splice(1,2);
  console.log(techs5);

  // Método indexOf. Encontrar a posição de um elemento no array
  let techs6 = ['html', 'css', 'js', 'sql', 'nodejs'];
  let index = techs6.indexOf('sql');
  console.log(index);


 








