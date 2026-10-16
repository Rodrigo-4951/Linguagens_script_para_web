 function soma(a,b){
    return a+b;
 }

 function multiplicar(a,b){
    return a*b;
 }

 function subtracao(a,b){
    return a-b;
 }

function aplicarOperacao (a,b,operacao){
    return operacao(a,b);
}

console.log(aplicarOperacao(8,2,soma))
console.log(aplicarOperacao(8,2,multiplicar))
console.log(aplicarOperacao(8,2,subtracao))