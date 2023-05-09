// Acompanhe a Prática Guiada e repita o exercício no Momento de Réplica!

//const imprimirNome = function(nome){
    //bloco codigo
//    console.log(`Olá, ${nome}`)
//}

//imprimirNome("Daylton")
//imprimirNome("Chanim")
//imprimirNome("sammi!!")

//--------------
function fazerOperacoes(numero) {
    const verifica = numero % 2 === 0
    const soma = numero + 10
    const multiplica = numero * numero //numero

    return (`O número ${numero} é par ${verifica}. Somando com 10 o resultado é ${soma}. Multipicado por ele mesmo o resultado é ${multiplica}`);
};

console.log(fazerOperacoes(-111))

//-----------------

const verificaDados = (login, senha) => {
    const loginArmazenado = "day@email.com"
    const senhaArmazenada = "12343"

    return loginArmazenado === login && senhaArmazenada === senha
}

console.log(verificaDados("day@email.com", "12343"))