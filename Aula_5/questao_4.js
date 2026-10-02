// questão 4


function contarVogais(palavra){
    let qntd=0;
    for(let i=0;i<palavra.length;i++){
        if("aeiou".includes(palavra[i])){
            qntd ++;
        }
    } return qntd;
} 

console.log(contarVogais("javascript"));