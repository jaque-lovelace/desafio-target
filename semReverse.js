/* 5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
*/

function inverteString(str) {
    let i = str.length - 1;
    let reversedStr = "";
    while (i >= 0) {
      reversedStr += str[i];
      i--;
    }
    return reversedStr;
  }
  
  // Exemplo de uso
  let str = "Palíndromo omissíssimo";
  let invertedStr = inverteString(str);
  console.log(invertedStr);
  