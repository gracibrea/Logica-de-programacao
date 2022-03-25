const nome = prompt('Olá! Qual é seu nome?');
const idade = prompt(`Quantos anos você tem,  ${nome}`);
const linguagem = prompt(`Qual linguagem de programação você está estudando,  ${nome}?`);
const gosto = prompt(`Você gosta de estudar ${linguagem}? Digite [1] para SIM e [0] para NÃO.`);

if (gosto == 1) {
	document.querySelector('.mensagem').innerHTML = `🤩 Que legal que aos ${idade} anos de idade  você curte estudar ${linguagem}, ${nome}. <br><br> Bons Estudos!`;
} else {
	document.querySelector('.mensagem').innerHTML = `😞 Que pena que você não curte estudar ${linguagem}, ${nome}. Já experimentou outra linguagem?`;
}

const stack = prompt(`Digite [1] se você pretende seguir estudando Front-end ou [2] se você é mais do Back-end.`);

if (stack == 1) {
	const stack = 'Front-end';
	alert(`Você optou por ${stack}`);
	const lib = prompt(`Digite [1] se você prefere a biblioteca React ou [2] se prefere Vue.`)
	if (lib == 1) {
		const lib = 'React';
		alert(`Você optou por ${lib}`);
	} else {
		const lib = 'Vue';
		alert(`Você optou por ${lib}`);	
	document.querySelector('.resStack').innerHTML = `Legal que você já sabe que  ${stack} é a sua praia e  ${lib} a sua biblioteca favorita, ${nome}.`;
	} 
} else {
	const stack = 'Back-end';
	alert(`Você optou por ${stack}`);
	const lib = prompt(`Digite [1] se você prefere C# ou [2] se prefere Java.`)
	if (lib == 1) {
		const lib = 'C#';
		alert(`Você optou por ${lib}`);
	} else if (lib == 2) {
		const lib = 'Java';
		alert(`Você optou por ${lib}`);	
	}
}
document.querySelector('.resStack').innerHTML = `Legal que você já sabe que  ${stack} é a sua praia e  ${lib} a sua biblioteca favorita, ${nome}.`;

/*
const especializacao = prompt(`${nome}, qual das duas opções melhor se aplica a você? [1] Seguir se especializando em ${stack} ou [2] partir para Fullstack?`)
if (especializacao == 1) {
	const especializacao = stack;
} else {
	const especializacao = 'Fullstack';
}
alert(`Você optou por ${especializacao}`);
*/