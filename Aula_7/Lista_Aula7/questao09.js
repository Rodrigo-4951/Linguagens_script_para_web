
function criarMultiplicador(fator){
    return function(num) {
        return fator * num;
    }
}

const dobro = criarMultiplicador(2);
const triplo = criarMultiplicador(3)

console.log(dobro(5));
console.log(triplo(5));
console.log(dobro(10));