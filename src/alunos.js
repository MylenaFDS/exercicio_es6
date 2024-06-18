const alunos = [
    { nome: 'Alice', nota: 8 },
    { nome: 'Bob', nota: 5 },
    { nome: 'Carlos', nota: 7 },
    { nome: 'Diana', nota: 4 },
    { nome: 'Evelyn', nota: 6 },
];

function filtrarAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovados = filtrarAprovados(alunos);
console.log(alunosAprovados);
