// questão 1
const nomes = ["ana", "bruno", "carla"];

function nomesMaiusculos(nomes=["ana", "bruno", "carla"]) {
    let tam = nomes.length;
    let maiusculo = [];

    for (let i = 0; i < tam; i++) {
        maiusculo.push(nomes[i].toUpperCase());
    }

    return maiusculo;
}

console.log(nomesMaiusculos(nomes));

