const carrinho = [
    {item:"Teclado", preco:150, quantidade:1},
    {item:"Mouse", preco:80, quantidade:2},
    {item:"Cabo USB", preco:25, quantidade:3}]

carrinho.reduce((total, carrinho) => { return total + carrinho.preco * carrinho.quantidade;}, 0);


console.log(`Total da compra: R$ ${total}`);