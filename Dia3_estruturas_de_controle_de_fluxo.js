/*
Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

1. Se quer **seguir para área de Front-End** ou **seguir para a área de Back-End**.

2. Caso esteja na área de **Front-End**, se quer **aprender React** ou **aprender Vue**. Caso esteja na área de **Back-End**, poderá **aprender C#** ou **aprender Java**.

3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre **seguir se especializando na área escolhida** ou **seguir se desenvolvendo para se tornar Fullstack**. 

Você deve exibir na tela uma mensagem específica para cada escolha.
*/

const nome = prompt('Olá! Qual é seu nome?');
const idade = prompt(`Quantos anos você tem,  ${nome}`);
const linguagem = prompt(`Qual linguagem de programação você está estudando,  ${nome}?`);
const gosto = prompt(`Você gosta de estudar ${linguagem}? Digite [1] para SIM e [0] para NÃO.`);

if (gosto == 1) {
	document.querySelector('.mensagem').innerHTML = `🤩 Que legal que aos ${idade} anos de idade  você curte estudar ${linguagem}, ${nome}. <br>Bons Estudos!`;
} else {
	document.querySelector('.mensagem').innerHTML = `😞 Que pena que você não curte estudar ${linguagem}, ${nome}. Já experimentou outra linguagem?`;
}

const stackEscolhida = prompt(`Digite [1] se você pretende seguir estudando Front-end ou [2] se você é mais do Back-end.`);
let lib = '';
let stack = '';

if (stackEscolhida == 1) {
	stack = 'Front-end';
	alert(`Você optou por ${stack}`);
	const libEscolhida = prompt(`Digite [1] se você prefere a biblioteca React ou [2] se prefere Vue.`)
	if (libEscolhida == 1) {
		lib = 'React';
		alert(`Você optou por ${lib}`);
	} else {
		lib = 'Vue';
		alert(`Você optou por ${lib}`);	
		document.querySelector('.resStack').innerHTML = `Legal que você já sabe que  ${stack} é a sua praia e  ${lib} a sua biblioteca favorita, ${nome}.`;
	} 
} else {
	stack = 'Back-end';
	alert(`Você optou por ${stack}`);
	const libEscolhida = prompt(`Digite [1] se você prefere C# ou [2] se prefere Java.`)
	if (libEscolhida == 1) {
		lib = 'C#';
		alert(`Você optou por ${lib}`);
	} else {
		lib = 'Java';
		alert(`Você optou por ${lib}`);	
		document.querySelector('.resStack').innerHTML = `Legal que você já sabe que ${stack} é a sua praia e ${lib} a sua biblioteca favorita, ${nome}.`;
	}	
}

/*
const especializacao = prompt(`${nome}, qual das duas opções melhor se aplica a você? [1] Seguir se especializando em ${stack} ou [2] partir para Fullstack?`)
if (especializacao == 1) {
	const especializacao = stack;
} else {
	const especializacao = 'Fullstack';
}
alert(`Você optou por ${especializacao}`);
*/