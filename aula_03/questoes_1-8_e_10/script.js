// questão 1-

let nome = prompt("insira seu nome");
let idade = prompt("insira sua idade")
let curso = prompt("insira seu curso");
let cidade = prompt("insira sua cidade");
alert(`Nome: ${nome} / idade: ${idade} / curso: ${curso} / cidade: ${cidade}`);

//questão 2-

let numero1 = Number(prompt("insira um numero")); 
let numero2 = Number(prompt("insira outro numero"));
let soma = numero1 + numero2;
let subtração = numero1 - numero2;
let multiplicação = numero1 * numero2;
let divisão = numero1 / numero2;
let resto = numero1 % numero2;
let potencia = numero1 ** numero2;
alert(`soma: ${soma} / subtração ${subtração} / multiplicação: ${multiplicação} / divisao: ${divisão} / resto: ${resto} / potencia: ${potencia}`);

// questão 3-

let nome = prompt("insira seu nome");
let idade = Number(prompt("insira sua idade"));
let altura = Number(prompt("insira seu altura"));
alert(`tipo do nome: ${typeof(nome)} / tipo da idade: ${typeof(idade)} / tipo da altura: ${typeof(altura)}`);

// questão 4-

let number1 = Number(prompt("insira um numero:"));
let number2 = Number(prompt("Insira outro numero:"));
maior1 = number1>number2;
iguais = number1 === number2;
diferentes = number1 !== number2;
menor1 = number1<number2;
alert(`O primeiro é maior que o segundo : ${maior1} / sao iguais : ${iguais} / diferentes: ${diferentes} / O primeiro é menor que o segundo: ${menor1}`);

// questão 5-

let preço = Number(prompt("Insira o preço do produto:"));
let quantidade = Number(prompt("Insira a quantidade do produto:"));
let desconto = Number(prompt("Insira a % de desconto:"));
subtotal = preço * quantidade;
desconto1 = subtotal - (subtotal * (1-(desconto/100)));
total = subtotal - desconto1;
alert(`subtotal: ${subtotal} / desconto: ${desconto1} / total : ${total}`);

// questão 6-

let distancia = Number(prompt("insira a distancia da viagem em km"));
let consumo = Number(prompt("insira a quantidade de km por litro de combustivel"));
let preço = Number(prompt("insira o preço do litro de combustivel"));
let estimativa = distancia/consumo;
let custo = preço*estimativa;
alert(`a quantidade estimada de combustivel consumido sera: ${estimativa} litros / e a custo total sera ${custo} reais`); 

// questão 7-

let nome = prompt("insira seu nome");
let idade = Number(prompt("insira sua idade"));
let curso = prompt("insira seu curso");
if(confirm("estes dados estão corretos?") === true){
    alert("os dados foram confirmados");
}
else{
    alert("os dados nao foram confirmados");
}

//questão 8-

let salario = Number(prompt("Insira o salario do funcionario:"));
let reajuste = Number(prompt("Insira o percentual de aumento do salario:"));
let aumento = salario*(1+(reajuste/100)) - salario;
let novosalario = salario*(1+(reajuste/100));
alert(`O salario do funcionario era ${salario} / o aumento foi de ${aumento} / e o novo salario é ${novosalario}`);

//questão 10-

const galão = Number(prompt("Insira a quantidade de litros do galão:"));
let agua = Number(prompt("Insira quantos litros de agua serão adicionados:"));
if(confirm("estes dados estão corretos?") === true){
    let totalAgua = galão+agua;
    alert(`O total de agua no galão sao: ${totalAgua} litros`);
}
else{
    agua= Number(prompt("os dados nao foram confirmados, insira novamente a quantidade de agua a ser adicionada:"));
    let totalAgua = galão+agua;
    alert(`O total de agua no galão sao: ${totalAgua} litros`);
}