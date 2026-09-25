// questao 1

let itens = 47;
let capacidade = 6;
let caixas = Math.floor(itens/capacidade);
const sobra = itens % capacidade;
let dimensao = 4;
dimensao = dimensao**3;
console.log(`itens: ${itens} / caixas: ${caixas} / total de itens sobrando: ${sobra} / dimensão: ${dimensao}`);

