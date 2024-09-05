const vagas = [];
var comando = '';

do {
    comando = prompt(menuOpcoes());

    switch (comando) {
        case "1":
            listarVagas();
            break;

        case "2":
            criarVaga();
            break;

        case "3":
            visualizarVaga();
            break;

        case "4":
            var candidato = criarCandidato();
            inscreverCandidato(candidato);
            break;

        case "5":
            excluirVaga()
            break;

        case "0":
            alert("Encerrando...");
            break;

        default:

            break;
    }
}
while (comando !== "0");

function listarVagas() {
    const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
        textoFinal += indice + ". ";
        textoFinal += vaga.nome_vaga;
        textoFinal += " (" + vaga.candidatos.length + " candidatos)\n";
        return textoFinal;
    }, "");

    alert(vagasEmTexto);
}

function criarVaga() {

    const nome_vaga = prompt("Digite o nome da vaga: ");
    const descricao_vaga = prompt("Digite a descrição da vaga: ");
    
    let data_limite_str = prompt("Digite a data limite para inscrição: ");
    // Converte a string fornecida em um objeto Date
    let data_limite = new Date(data_limite_str);

    // Verifica se a data é válida
    if (isNaN(data_limite.getTime())) {
    console.log("Data inválida. Insira uma data no formato YYYY-MM-DD.");
    }

    let confirma = confirm("\n*************************\n"
                + nome_vaga
                + "\n" + descricao_vaga + "\n" 
                + data_limite
                + "\nDeseja confirmar?\n");
    
    if (confirma) {
        const nova_vaga = {
            // quando o nome da chave é igual ao nome da variável,
            // o valor da chave é igual ao valor da variável
            // o JS define isso automaticamente
            nome_vaga,
            descricao_vaga,
            data_limite,
            candidatos: []
        };

        vagas.push(nova_vaga);
        alert("Vaga criada com sucesso!");
    }
}

function visualizarVaga() {

    const indice = prompt("Informe o índice da vaga que deseja exibir:");
    const vaga = vagas[indice];

    const candidatosEmTexto = vaga.candidatos.reduce((textoFinal, candidato) => textoFinal += candidato.nome_candidato + "\n", "");

    alert(
        "\nDetalhes da vaga:" + "\n" +
        "Nome: " + vaga.nome_vaga + "\n" +
        "Descrição: " + vaga.descricao_vaga + "\n" +
        "Data limite para inscrição: " + vaga.data_limite + "\n" +
        "Candidatos inscritos:\n" + candidatosEmTexto + "\n"
    );
}

function criarCandidato() {

    const nome_candidato = prompt("Digite o nome do candidato: ");
    const email_candidato = prompt("Digite o email do candidato: ");
    const end_rua_candidato = prompt("Digite a rua do candidato: ");
    const end_numero_candidato = prompt("Digite o número da casa do candidato: ");

    const candidato = {
        nome_candidato,
        email_candidato,
        endereco_candidato: {
            rua: end_rua_candidato,
            numero: end_numero_candidato
        }
    };

    return candidato;
}

function inscreverCandidato(candidato) {
    
    const indice = prompt("Em qual vaga deseja inscrever o candidato?\n")
    const vaga = vagas[indice];

    const confirmacao = confirm(
        "Deseja inscrever o candidato " + candidato.nome_candidato + " na vaga " + indice + "?\n" +
        "Nome: " + vaga.nome_vaga + "\nDescrição: " + vaga.descricao_vaga + "\nData limite: " + vaga.data_limite
    );

    if (confirmacao) {
        vaga.candidatos.push(candidato);
        alert("Inscrição realizada");
    }
}

function excluirVaga() {

    indice = prompt("Insira o índice da vaga a ser excluída: ");

    vagas.splice(indice, 1);

    alert("Vaga removida com sucesso!");
}

function menuOpcoes() {
   const menu = "\nO que deseja?\n1 - Listar vagas disponíveis\n2 - Criar um nova vaga\n3 - Visualizar uma vaga\n4 - Inscrever um candidato em uma vaga\n5 - Excluir uma vaga\n0 - Sair\n";

   return menu;
}
