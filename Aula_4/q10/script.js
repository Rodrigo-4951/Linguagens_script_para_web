let num = Number(prompt("Insira um numero"));
let impar = 0;
let par = 0;

for(i=1;i<=num;i++){
    if(i%2 == 0){
        console.log(`${i} - par`);
        par +=1
    } else{
        console.log(`${i} - impar`);
        impar +=1
    }
}
console.log(`pares: ${par}`);
console.log(`impares: ${impar}`);