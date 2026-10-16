const alunos = [
    {nome:"Ana", media:8.5},
    {nome:"Bruno", media:6},
    {nome:"Carla", media:9},
    {nome:"Davi", media:5.5}
]
const primeiro = alunos.find(menor => menor.media < 7 )
const maiorigual = alunos.some(nota => nota.media>=9);
const todos7 = alunos.every(notas => notas>=7 );

console.log(primeiro.nome);
console.log(maiorigual);
console.log(todos7);