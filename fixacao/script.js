// Resolva o Exercício de Fixação!
const dadosPessoais = (_nome, anoNascimento , yearrrAtual) => {
    return `${_nome}, você é maior de idade? ${yearrrAtual - anoNascimento >= 18}, você tem ${yearrAtual - anoNascimento}anos!`

}

console.log(dadosPessoais("day", 2000, 2023));
console.log(dadosPessoais("TesttPersonn", 2009, 2023))
console.log(dadosPessoais("TesttPerson2", 2003, 2023))