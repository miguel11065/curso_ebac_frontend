const alunos = [
    {aluno: 'Pedro', nota: '3'},
    {aluno: 'Maria',  nota: '8'},
    {aluno: 'Thiago',  nota: '7'},
    {aluno: 'Igor',  nota: '5'},
    {aluno: 'Barbara',  nota: '1'},
    {aluno: 'Elisa', nota: '9'},
    {aluno: 'Cesar', nota: '10'}
]

function alunosAprovados(passou) {
    const aprovados = passou.filter(media => media.nota >= 6);
    console.log("Segue os alunos que foram aprovados:")
    return aprovados
}

console.log(alunosAprovados(alunos))