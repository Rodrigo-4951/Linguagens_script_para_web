// questao 3-

let meta = Number(prompt("qual é a meta do mes?"));
let vendido = Number(prompt("quanto foi vendido no mes?"));
let atingiu = (vendido>=meta);
let superou = (vendido>meta);
let exata = (vendido === meta);
let diferença = vendido-meta;
console.log(`meta: ${meta} / vendido: ${vendido} \n
    Atingiu a meta? ${atingiu}\n
    Superou a meta? ${superou}\n
    Meta exata? ${exata}\n
    Diferença: ${diferença}\n `);