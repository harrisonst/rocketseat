/* 
  Function () constructor

  *expressao new
  * criar um novo objeto
  * this keyword
*/

function Person (name) {
  this.name = name
  this.walk = function () {
    return this.name + " está andando"
  }

}

const mayk = new Person ("Mayk");
const joao = new Person ("João");
console.log(mayk.walk())
console.log(joao.walk())

/* 
   Diversas function constructor são inciadas com letra maiúscula por padrão do js. 
   Por isso, é uma boa prática escrevê-las com a inicial maiúscula.
*/