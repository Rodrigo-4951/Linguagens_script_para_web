//questão 4-

let idade = 20;
let possuiConvite = false;

if(idade>=18 && possuiConvite===true){
    console.log("entra permitida");
}   else if(idade>=18 && possuiConvite===false){
    console.log("entrada negada \n motivo: nao possui convite");
}       else if(idade<18 && possuiConvite===true){
    console.log("entrada negada \n motivo: menor de idade");
}