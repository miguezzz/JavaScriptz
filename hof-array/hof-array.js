// array de objetos:
const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

/*
// a forma "comum" de retornar os nomes dos personagens acima seria a seguinte:
const nomes = []
for (let i = 0; i < personagens.length; i++) {
    const personagem = personagens[i]
    nomes.push(personagem.nome)
}
*/

// map: permite obter um novo array a partir de um array existente
// a funcao passada como parametro define o que sera retornado
const nomes = personagens.map(function (personagem) {
    return personagem.nome
})

/*
// a forma "comum" de retornar os personagens da raca orc seria a seguinte:
const orcs = []
for (let i = 0; i < personagens.length; i++) {
    const personagem = personagens[i]
    if (personagem.raca === "Orc") {
        orcs.push(personagem)
    }
}
*/


// filter: permite obter um novo array contendo apenas elementos específicos de um array existente
const orcs = personagens.filter(function (personagem) {
    return personagem.raca === "Orc"
})


/*
// reduce com for:
let nivelTotal = 0
for (let i = 0; i < personagens.length; i++) {
    nivelTotal += personagens[i].nivel
}
*/

// reduce: serve para *reduzir* um array existente a um valor final qualquer,
// passando um valor entre cada iteração sobre esse array e retornando ele no final
const nivelTotal = personagens.reduce(function (acumulador, personagem) {
    return acumulador + personagem.nivel
}, 0)
// repare no segundo parametro, eh o valor inicial do acumulador!

// para organizar o array de acordo com as racas, fazemos o seguinte:
const racas = personagens.reduce(function (acumulador, personagem) {
    if (acumulador[personagem.raca]) {
        acumulador[personagem.raca].push(personagem)
    } else {
        acumulador[personagem.raca] = [personagem]
    }
    return acumulador
}, {})

console.log(racas)

// sort: ordena os elementos de um array a partir de comparações entre duplas de elementos
// utilizamos os resultados negativos ou positivos para ordenar os elementos!
// personagens.sort(function (a, b) {
//     return a.nivel - b.nivel
// })

// podemos utilizar o sort sem mexer no array original:
const personagensOrdenados = personagens.slice().sort(function (a, b) {
    return a.nivel - b.nivel
})

console.log(personagens);
console.log(personagensOrdenados);