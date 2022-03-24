let nome = prompt('Olá! Qual é seu nome?');
let idade = prompt(`Quantos anos você tem, ${nome}`);
let linguagem = prompt(`Qual linguagem de programação você está estudando, ${nome}?`);
let gosto = prompt(`E você gosta de estudar ${linguagem}? Digite 1 para SIM e 0 para NÃO`)

document.querySelector(".nome").innerHTML = (`✔ Seu nome é ${nome}`)
document.querySelector(".idade").innerHTML = (`✔ Você está com ${idade} anos`)
document.querySelector(".linguagem").innerHTML = (`✔ E no momento estuda ${linguagem}`)

if (gosto == 1) {
    document.querySelector(".mensagem").innerHTML = (`🤩 Que legal que você curte estudar ${linguagem}, ${nome}. <br> Bons Estudos!`);
} else {
    document.querySelector(".mensagem").innerHTML = (`😞 Que pena que você não curte estudar ${linguagem}, ${nome}`);
}
