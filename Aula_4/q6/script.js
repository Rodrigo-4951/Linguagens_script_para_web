// questão 6-

let temperatura = Number(prompt("Insira a temperatura:"));
if(temperatura>=26){
    console.log(`temperatura: ${temperatura} clima: quente`);
}   else if(temperatura>=15 && temperatura<26){
     console.log(`temperatura: ${temperatura} clima: ameno`);
}   else{
     console.log(`temperatura: ${temperatura} clima: frio`);
}