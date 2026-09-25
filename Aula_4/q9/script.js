const senha = "ifpb2026"
let tentativas = 0;
let pass= '';
do{
    pass = prompt("Digite a senha");
    if(pass == senha){
        console.log(`Bem vindo voce acertou em ${tentativas}`);
    }   else{
        tentativas +=1;
    }
} while (pass !== senha);

// do while é a melhor opção pois caso a senha esteja certa de imediato nao havera repetições;