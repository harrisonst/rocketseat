// Estruturas de repetição
//FOR
// break - para a execupção do loop
for (let i = 10; i > 0; i--){
  if (i === 5)
     break;

     console.log(i);
}

// continue - pula a execução do momento
for (let i = 10; i > 0; i--){
  if (i === 5)
     continue;

     console.log(i);
}

// WHILE
let index = 0;
while (index > 10) {
  console.log(index);

  index++;
}

// FOR OF
let nameForOf = 'joao'
let names = ['joao', 'lucas','rogerio', 'mateus'];

for (let nameForOf of names){
   console.log (nameForOf);
}

// FOR IN - cria um loop em cima de um objeto, pegando as propriedades do objeto

let personForIn = {
  name: 'John',
  age: 30,
  weight: 90,
}
for (let property in personForIn){
  console.log(property);
  console.log(personForIn[property]);
}