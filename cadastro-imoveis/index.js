// array para inserir os objetos (imoveis)
const imoveis = []
var imoveis_qtd = 0
var comando = ""

do {
    comando = prompt("Imóveis cadastrados: " + imoveis_qtd +
        "\nO que deseja?\n1 - Adicionar imóvel\n2 - Mostrar todos os imóveis\n0 - Sair")

    switch (comando) {
        case "1":
            const imovel = {}

            imovel.proprietario = prompt("Digite o nome do(a) proprietário(a) do imóvel: ")
            imovel.quartos = parseInt(prompt("Digite o número de quartos do imóvel: "))
            imovel.banheiros = parseInt(prompt("Digite a quantidade de banheiros do imóvel: "))
            imovel.garagem = prompt("Imóvel possui garagem? (s/n)")

            const confirma = confirm(
                "Salvar este imóvel?\n" +
                "\nProprietário(a): " + imovel.proprietario +
                "\nQuartos: " + imovel.quartos +
                "\nBanheiros: " + imovel.banheiros +
                "\nPossui Garagem? " + imovel.garagem
            )

            if (confirma) {
                imoveis.push(imovel)
                imoveis_qtd++
            }
        break

        case "2":
            for (let i = 0; i < imoveis.length; i++) {
                alert(
                    "Imóvel " + (i + 1) + ":" +
                    "\nProprietário(a): " + imoveis[i].proprietario +
                    "\nQuartos: " + imoveis[i].quartos +
                    "\nBanheiros: " + imoveis[i].banheiros +
                    "\nGaragem: " + imoveis[i].garagem
                )
            }
        break

        case "0":
            alert("Encerrando...")
        break

        default:
            console.log("Comando inválido!");
        break
    }   
}
while (comando !== 0)