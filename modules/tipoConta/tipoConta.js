document.addEventListener("DOMContentLoaded", function () {
    // Aguarda o carregamento do DOM

    // Obtém o formulário pelo ID
    var tipoContaForm = document.getElementById("tipoContaForm");

    // Adiciona um ouvinte de evento para o envio do formulário
    tipoContaForm.addEventListener("submit", function (event) {
        // Previne o comportamento padrão de envio do formulário
        event.preventDefault();

        // Obtém o valor do botão de opção selecionado
        var tipoContaSelecionado = document.querySelector('input[name="tipoConta"]:checked');

        // Verifica se um botão de opção está selecionado
        if (tipoContaSelecionado) {
            // Obtém o valor do botão de opção selecionado
            var tipoContaValor = tipoContaSelecionado.value;

            // Verifica se o tipo de conta é "administrador"
            if (tipoContaValor === "administrador") {
                // Redireciona para a página adminForm.html
                window.location.href = "contaAdmin/adminForm.html";
            } else {
                // Lógica para outros tipos de conta, se necessário
            }
        }
    });
});
