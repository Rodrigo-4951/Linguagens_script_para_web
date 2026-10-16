function gerarUsuario(nomeCompleto){
    novoNome = nomeCompleto.trim().toLowerCase().split(' ').join('.')
    return novoNome
}

console.log(gerarUsuario("   MARIA CLARA SOUZA   "));
console.log(gerarUsuario("JOAO LIMA"));
