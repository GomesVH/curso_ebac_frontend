const Alunos = [
    { nome: 'João', nota: 7 },
    { nome: 'Maria', nota: 5 },
    { nome: 'Pedro', nota: 8 },
    { nome: 'Ana', nota: 6 },
    { nome: 'Carlos', nota: 4 },
    { nome: "Alice", nota: 8 },
    { nome: "Bob", nota: 5 },
    { nome: "Carol", nota: 7 },
    { nome: "David", nota: 9 },
];

function filtrarNota(listaAlunos, notaMinima) {
    let AlunosFiltrados = listaAlunos.filter(aluno => aluno.nota >= notaMinima);
    return AlunosFiltrados;
}

let AlunosAprovados = filtrarNota(Alunos, 6);
console.log(AlunosAprovados);
