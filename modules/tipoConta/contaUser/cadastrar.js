function cadastrarRefugiado() {
    // Criação do objeto refugiado e preenchimento dos dados
    if(document.getElementById("admin").checked === true) {
        var admin = {
            login: document.getElementById
        }
    }

    var refugiado = {
        nome: document.getElementById("nome").value,
        endereco: document.getElementById("endereco").value,
        idade: parseInt(document.getElementById("idade").value),
        religiao: document.getElementById("religiao").value,
        ideologia: document.getElementById("ideologia").value,
        profissao: document.getElementById("profissao").value,
        numFilhos: parseInt(document.getElementById("numFilhos").value),
        rendaFamiliar: document.getElementById("rendaFamiliar").value,
        grauFormacao: document.getElementById("grauFormacao").value,
        admin: document.getElementById("admin").checked
    };

    // Enviar dados para a API usando fetch
    fetch('http://localhost:3000/refugiados', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(refugiado),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Refugiado cadastrado com sucesso:', data);
        // Você pode redirecionar para outra página ou fazer outras ações após o cadastro
    })
    .catch(error => console.error('Erro ao cadastrar refugiado:', error));
}
