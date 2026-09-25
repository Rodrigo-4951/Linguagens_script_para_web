let num = Number(prompt("Insira um numero para tabuada"));
console.log(`Tabuada do ${num}`);
for(i=1;i<=10;i++){
    let result = num*i;
    console.log(`${num} x ${i} = ${result}`);
}