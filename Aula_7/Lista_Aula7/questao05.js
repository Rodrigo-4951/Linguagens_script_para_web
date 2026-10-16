const recebido = '{"produto":"monitor", "preco":900, "estoque":4}'
let alterar = JSON.parse(recebido);

alterar.preco = alterar.preco * 0.9
alterar.estoque -=1 

console.log(typeof(alterar));
console.log(alterar);

alterar = JSON.stringify(alterar);

console.log(typeof(alterar));