// Exercice 02

let students = [
  {
    studentName: "João",
    firstNote: 7,
    secondNote: 9,
  },
  {
    studentName: "Laura",
    firstNote: 9,
    secondNote: 10,
  },
  {
    studentName: "Raquel",
    firstNote: 4,
    secondNote: 7,
  },
  {
    studentName: "Henrique",
    firstNote: 9,
    secondNote: 10,
  },
];

let average = [];
function studentAverage(students){
  average = ((students.firstNote + students.secondNote) / 2).toFixed(2)
  return average
}

for (let student of students) {
  if (studentAverage(student) >= 7){
    alert(`A média do(a) aluno(a) ${student.studentName} é ${studentAverage(student)}. \n
    Parabéns, ${student.studentName}!  Você foi aprovado(a) no concurso!
    `)
  } else {
    alert(`A média do(a) aluno(a) ${student.studentName} é ${studentAverage(student)}. \n
    Não foi dessa vez, ${student.studentName}. Tente novamente.
    `)
  }   
}
