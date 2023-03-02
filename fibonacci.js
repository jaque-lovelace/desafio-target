/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo 
valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci 
e retorne uma mensagem avisando se o número informado pertence ou não a sequência.*/

//Entrada de dados pelo usuário

let numero = parseInt(prompt("Entre com um número: "));

//declara variáveis:

let x = 0, y = 1, z;

//calcula a sequência com 0 e 1 enqunato armazena os valores nas variáveis x, y e z
/*dentro do while compara se o valor de x que inicia a sequência é menor ou igual ao número informado pelo usuário,
 caso seja igual, mostra a mensagem de que pertence à sequência e o condicional if se encerra com o break, caso não,
 enquanto não for verdade a informação anterior, é calculado o próximo 
valor que sempre será a soma dos 2 valores anteriores*/


/*Fora do laço é verificado se x é diferente do numero digitado pelo user, se for, informa que não pertence à sequência de fibonacci*/

while (x <= numero) {
  if (x === numero) {
    console.log(numero + " pertence à sequência de Fibonacci");
    break;
  }
  z = x + y;
  x = y;
  y = z;
}

if (x !== numero) {
  console.log(numero + " não pertence à sequência de Fibonacci");
}