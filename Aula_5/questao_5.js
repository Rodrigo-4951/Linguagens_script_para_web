// questão 5

let list =[{nome:"Ana", idade:20},
           {nome:"Bruno", idade:22}];
           
 function buscarAluno(list =[], nomeBuscado){
    for(let i=0;i<list.length;i++){
        if(list[i].nome.toLowerCase()===nomeBuscado.toLowerCase()){
            return `{nome: ${list[i].nome}  idade: ${list[i].idade}}`;
        }
    } return null
 }

 console.log(buscarAluno(list,"BRUNO"));