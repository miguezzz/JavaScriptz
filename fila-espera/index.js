const queue = []
let comando = ""

console.log("Seja bem-vindo(a) ao sistema de Filas vmiguxQueue.")

do {
    //mostra a fila de pacientes
    let pacientes = ""
    for(let i = 0; i < queue.length; i++) {
        pacientes += (i + 1) + "º - " + queue[i] + "\n"
    }

    comando = prompt("Pacientes:\n" + pacientes + 
    "\nO que deseja fazer?\n1 - Novo paciente\n2 - Consultar paciente\n0 - Sair")

    switch (comando) {
        case "1":
            const novoPaciente = prompt("Digite o nome do(a) paciente");
            queue.push(novoPaciente)
        break

        case "2":
            let consultarPaciente = queue.shift()
            if (!consultarPaciente) {
                alert("Não há pacientes na fila!")
            }
            console.log(consultarPaciente + " foi consultado(a)");
        break

        case "0":
            alert("Encerrando...")
        break

        default:
            console.log("Comando invalido!");
        break
    }
}
while (comando !== 0)