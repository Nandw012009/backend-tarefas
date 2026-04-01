function saudacao(nomeJogador) {
    console.log("Bem vindo ao jogo, " + nomeJogador + "!") 
}

saudacao("Fer");

//funçao que recebe um valor
function subirDeNivel(nivelAtual) {
    return nivelAtual +1;
}

let meuNivel = 10;

let nivelAtualizado = subirDenivel(meuNivel);

console.log(`Seu novo nivel: ` + nivelAtualizado);