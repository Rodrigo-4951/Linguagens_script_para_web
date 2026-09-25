const btn = document.querySelector('#calc');

btn.addEventListener('click', function () {

    const n1 = Number(document.querySelector('#n1').value);
    const n2 = Number(document.querySelector('#n2').value);
    const media = (n1 + n2) / 2;
    const saida = document.querySelector('#saida');
    if(media >= 7){
        saida.textContent = `Média: ${media}, aprovado`;
        saida.className = 'aprovado';
    }
    else{
        saida.textContent = `Média: ${media}, reprovado`;
        saida.className = 'reprovado';
    }
});