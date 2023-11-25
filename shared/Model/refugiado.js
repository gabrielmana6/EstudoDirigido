class Refugiado {
    constructor(nome, endereco, idade, religiao, ideologia, profissao, numFilhos, rendaFamiliar, grauFormacao, admin) {
        this._login = login;
        this._senha = senha;
        
        this._nome = nome;
        this._endereco = endereco;
        this._idade = idade;
        this._religiao = religiao ;
        this._ideologia = ideologia ;
        this._profissao = profissao;
        this._numFilhos = numFilhos;
        this._rendaFamiliar = rendaFamiliar;
        this._grauFormacao = grauFormacaoundamental;
        this._admin = admin;
    }

    // Métodos de acesso (getters)
    get login() {
        return this._login;
    }

    get senha() {
        return this._senha;
    }

    get nome() {
        return this._nome;
    }

    get endereco() {
        return this._endereco;
    }

    get idade() {
        return this._idade;
    }

    get religiao() {
        return this._religiao;
    }

    get ideologia() {
        return this._ideologia;
    }

    get profissao() {
        return this._profissao;
    }

    get numFilhos() {
        return this._numFilhos;
    }

    get rendaFamiliar() {
        return this._rendaFamiliar;
    }

    get grauFormacao() {
        return this._grauFormacao;
    }

    get admin() {
        return this._admin;
    }

    // Métodos de acesso (setters)
    set login(novoLogin) {
        this._login = novoLogin;
    }

    set senha(novaSenha) {
        this._senha = novaSenha;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    set endereco(novoEndereco) {
        this._endereco = novoEndereco;
    }

    set idade(novaIdade) {
        this._idade = novaIdade;
    }

    set religiao(novaReligiao) {
        this._religiao = novaReligiao;
    }

    set ideologia(novaIdeologia) {
        this._ideologia = novaIdeologia;
    }

    set profissao(novaProfissao) {
        this._profissao = novaProfissao;
    }

    set numFilhos(novoNumFilhos) {
        this._numFilhos = novoNumFilhos;
    }

    set rendaFamiliar(novaRendaFamiliar) {
        this._rendaFamiliar = novaRendaFamiliar;
    }

    set grauFormacao(novoGrauFormacao) {
        this._grauFormacao = novoGrauFormacao;
    }

    // Métodos públicos
    toString() {
        return `Refugiado [ID: ${this._id}, Nome: ${this._nome}, Endereço: ${this._endereco}, Idade: ${this._idade}, Religião: ${this._religiao}, Ideologia: ${this._ideologia}, Profissão: ${this._profissao}, Número de Filhos: ${this._numFilhos}, Renda Familiar: ${this._rendaFamiliar}, Grau de Formação: ${this._grauFormacao}, Admin: ${this._admin}]`;
    }
}