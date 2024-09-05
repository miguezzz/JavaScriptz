// 1. Dobrar os Números
// Crie uma função que receba um array de números e retorne um novo array onde cada número é o dobro do original.

// Exemplo de entrada: [1, 2, 3, 4, 5]
// Saída esperada: [2, 4, 6, 8, 10]

function dobrarNumeros(arr) {
  return arr.map(num => num * 2);
}

console.log(dobrarNumeros([1, 2, 3, 4, 5]));



// 2. Filtrar Números Pares
// Crie uma função que receba um array de números e retorne um novo array contendo apenas os números pares.

// Exemplo de entrada: [1, 2, 3, 4, 5, 6]
// Saída esperada: [2, 4, 6]

function filtrarPares(arr) {
  return arr.filter(num => num % 2 === 0);
}

console.log(filtrarPares([1, 2, 3, 4, 5, 6]));



// 3. Somar Todos os Números
// Crie uma função que receba um array de números e retorne a soma de todos os elementos.

// Exemplo de entrada: [1, 2, 3, 4]
// Saída esperada: 10

function somarNumeros(arr) {
  return arr.reduce((acumulador, num) => acumulador + num, 0);
}

console.log(somarNumeros([1, 2, 3, 4]));



// 4. Criar uma Lista de Nomes
// Dado um array de objetos que representam pessoas, crie uma função que retorne um novo array contendo apenas os nomes dessas pessoas.


// Exemplo de entrada: [{nome: 'João', idade: 25}, {nome: 'Maria', idade: 30}]
// Saída esperada: ['João', 'Maria']

function listarNomes(arr) {
  return arr.map(pessoa => pessoa.nome);
}

console.log(listarNomes([{nome: 'João', idade: 25}, {nome: 'Maria', idade: 30}]));



// 5. Somar Idades
// Dado um array de objetos que representam pessoas, crie uma função que retorne a soma das idades.

// Exemplo de entrada: [{nome: 'João', idade: 25}, {nome: 'Maria', idade: 30}]
// Saída esperada: 55

function somarIdades(arr) {
  return arr.reduce((acumulador, pessoa) => acumulador + pessoa.idade, 0);
}

console.log(somarIdades([{nome: 'João', idade: 25}, {nome: 'Maria', idade: 30}]));



// 6. Filtrar Pessoas com Idade Maior que 18
// Crie uma função que receba um array de objetos que representam pessoas e retorne apenas as pessoas com idade maior que 18.

// Exemplo de entrada: [{nome: 'João', idade: 17}, {nome: 'Maria', idade: 20}]
// Saída esperada: [{nome: 'Maria', idade: 20}]

function filtrarMaioresDeIdade(arr) {
  return arr.filter(pessoa => pessoa.idade > 18);
}

console.log(filtrarMaioresDeIdade([{nome: 'João', idade: 17}, {nome: 'Maria', idade: 20}]));



// 7. Concatenação de Strings
// Dado um array de strings, use o reduce() para concatená-las em uma única string separada por vírgulas.

// Exemplo de entrada: ['maçã', 'banana', 'laranja']
// Saída esperada: 'maçã, banana, laranja'

function concatenarStrings(arr) {
  return arr.reduce((acumulador, str) => acumulador + ', ' + str);
}

console.log(concatenarStrings(['maçã', 'banana', 'laranja']));



// 8. Contar Ocorrências de um Valor
// Dado um array, crie uma função que conte quantas vezes um determinado valor aparece no array.

// Exemplo de entrada: [1, 2, 2, 3, 3, 3, 4], valor a contar: 3
// Saída esperada: 3

function contarOcorrencias(arr, valor) {
  return arr.reduce((contador, item) => item === valor ? contador + 1 : contador, 0);
}

console.log(contarOcorrencias([1, 2, 2, 3, 3, 3, 4], 3));



// 9. Obter Números Únicos
// Crie uma função que, dado um array de números, retorne um novo array contendo apenas os números únicos (sem repetição).

// Exemplo de entrada: [1, 2, 2, 3, 4, 4, 5]
// Saída esperada: [1, 2, 3, 4, 5]

function numerosUnicos(arr) {
  return arr.filter((num, index, self) => self.indexOf(num) === index);
}

console.log(numerosUnicos([1, 2, 2, 3, 4, 4, 5]));



// 10. Transformar um Array de Números em um Objeto
// Crie uma função que receba um array de números e retorne um objeto onde as chaves são os números e os valores são seus quadrados.

// Exemplo de entrada: [1, 2, 3, 4]
// Saída esperada: { 1: 1, 2: 4, 3: 9, 4: 16 }

function arrayParaObjeto(arr) {
  return arr.reduce((obj, num) => {
    obj[num] = num * num;
    return obj;
  }, {});
}

console.log(arrayParaObjeto([1, 2, 3, 4]));