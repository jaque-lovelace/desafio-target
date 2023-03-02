
/*4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de 
representação que cada estado teve dentro do valor total mensal da distribuidora.*/

//esse objeto armazena o faturamento mensal por estado
const faturamesEstado = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53
  };

  /*aqui calcula o faturamento total somando os valores do objeto faturaEstado usando o método reduce() onde há dois parâmetros
  (acumulado = valor acumulado e somaArray = valor do elemento sendo percorrido no array)*/
  
  const faturamentoTotal = Object.values(faturamesEstado).reduce((acumulado, somaArray) => acumulado + somaArray);
  
  //objeto vazio que vai armazenar o % de cada estado no faturamento total
  const percentualEstado = {};

  //calcula de fato a % total de cada estado capturado no array estado que é 
  //o produto de faturamento mensal faturamesEstado dividido pelo total multiplicado por 100 pra saber em %

  for (const estado in faturamesEstado) {
    percentualEstado[estado] = (faturamesEstado[estado] / faturamentoTotal) * 100;
  }
  
  //saída de dados com o percentual por estado
  console.log(percentualEstado);
  