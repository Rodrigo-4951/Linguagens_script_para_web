// questão 3

function cadastrarProduto(lista=[],nome,preco){
    const produto= {
        nome:nome,
        preco:preco}
lista.push(produto);
return lista.length }

console.log(cadastrarProduto(lista=[],"batata",15));