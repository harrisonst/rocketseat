/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes // suas idades, alturas e pesos.
  ex: Luiz tem 20, pesa 100kg e tem altura de 190 centímetros.
*/

// const patients = [
//   {
//     name: "Luiz",
//     age: 20,
//     weight: 90,
//     height: 190,
//   },
//   {
//     name: "Alexandra",
//     age: 25,
//     weight: 70,
//     height: 170,
//   },
//   {
//     name: "Carlos",
//     age: 30,
//     weight: 85,
//     height: 180,
//   },
// ]

// let patientsNames = []
// for (let index = 0; index < patients.length; index++) {
//   patientsNames[index] = patients[index].name
// }

// alert (patientsNames + " ")

/*
Escreva uma lista contendo o nome dos pacientes // suas idades, alturas e pesos.
  ex: Luiz tem 20, pesa 100kg e tem altura de 190 centímetros.
*/

const patients = [ // array que conterá objetos que conterão as informações dos pacientes
  { // {} sinal para objeto
    patientName: "Lucas",
    age: 30,
    weight: 90,
    height: 180,
  },
  { 
    patientName: "Rafaela",
    age: 24,
    weight: 77,
    height: 175,
  },
  { 
    patientName: "Luíza",
    age: 35,
    weight: 80,
    height: 177,
  },
]

let patientsNameList = [];
for (let patient of patients) {
  patientsNameList.push(patient.patientName)
  
}
alert(`Os pacientes ${patientsNameList} possuem respectivamente 

`)

