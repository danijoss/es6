//exercício mopdulo 25 | Recursos do ES6+

const alunos = [
    {
        nome: 'Daniel',
        nota: 6.0,
    },
    {
        nome: 'Pedro',
        nota: 5.0,
    },
    {
        nome: 'Mayara',
        nota: 7.0,
    },
    {
        nome: 'Camila',
        nota: 4.0,
    },
]

console.log("Todos os alunos:")
console.log(alunos)

const filtraAlunosAprovados = (aluno) => aluno.nota >= 6.0;
const alunosAprovados = alunos.filter(filtraAlunosAprovados)

console.log("Alunos com nota maior ou igual a 6:")
console.log(alunosAprovados)