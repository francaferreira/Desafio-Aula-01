// Desafio aula 1

// Mostre um alerta com a mensagem "Boas vindas ao nosso site!".

alert ('Boas vindas ao nooso site!');


// Declare uma variável chamada nome e atribua a ela o valor "Lua".

var nome = 'Lua';

// Crie uma variável chamada idade e atribua a ela o valor 25.

var idade = 25;

// Defina uma variável numeroDeVendas e atribua a ela o valor 50.

var numeroDeVendas = 50;

// Defina uma variável saldoDisponivel e atribua a ela o valor 1000.

var saldoDisponivel = 1000;

// Exiba um alerta com o texto "Erro! Preencha todos os campos"

alert ('Erro! Preencha todos os campos');

//  Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.

var mensagemDeErro = 'Erro! Preencha todos os campos';
alert (mensagemDeErro);


// Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.
var nome = prompt('Qual é o seu nome?');

// Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
var idade = prompt('Qual é a sua idade');
idade = parseInt(idade);

// Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
if(idade >= 18) {
    alert('Pode tirar a habilitação!');
}
