// questão 2

const aluno = {
    nome:"maria",
    curso:"ADS"}

function apresentarAluno(aluno){
    let template = `${aluno.nome.toUpperCase()} (${(aluno.curso)})`;
    return template;
}

console.log(apresentarAluno(aluno));