// questão 11-

const nome = "Rodrigo";
const idade = 20;
const curso = "ADS";
let nota1 = 5;
let nota2 = 6;
let nota3 = 7;
let media = (nota1+nota2+nota3)/3;
let somatoria = nota1+nota2+nota3;
let notaNecessaria = 21-somatoria;

console.log("Dados do Aluno:");
console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade}`);
console.log(`Curso: ${curso}`);
console.log(`Nota 1: ${nota1}`);
console.log(`Nota 2: ${nota2}`);
console.log(`Nota 3: ${nota3}`);
console.log(`Media: ${media}`);
console.log(`Soma das 3 notas: ${somatoria}`);
console.log(`Nota necessaria para aprovação: ${notaNecessaria}`);