/*
  Capture 10 itens para compor a lista de um supermercado.
  Após capturá-los, imprima-os separando por vírgula.
 */

// A solução abaixo é inviável em função da quantidade de linhas a serem modificadas numa eventual manutenção
// let product1 = prompt('Digite o produto 1')
// let product2 = prompt('Digite o produto 2')
// let product3 = prompt('Digite o produto 3')
// let product4 = prompt('Digite o produto 4')
// let product5 = prompt('Digite o produto 5')
// let product6 = prompt('Digite o produto 6')
// let product7 = prompt('Digite o produto 7')
// let product8 = prompt('Digite o produto 8')
// let product9 = prompt('Digite o produto 9')
// let product10 = prompt('Digite o produto 10')

// alert('Os produtos digitados foram ' + product1 + ', ' + product2 + ', ' + product3 + ', ' + product4 + ', ' + 
// product5 + ', ' + product6 + ', ' + product7 + ', ' + product8 + ', ' + product9 + 'e ' + product10 + '.')
let itens = [];

  for (let item = 0; item < 10; item++){
  let intemName = prompt('Digite o item' + (item + 1))

  itens[item]= intemName
}

alert(itens)



  


  