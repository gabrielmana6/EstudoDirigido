class Admin {
    constructor(login, senha) {
        this._login = login;
        this._senha = senha;     
    }

    // Métodos de acesso (getters)
    get login() {
        return this._login;
    }

    get senha() {
        return this._senha;
    }

     // Métodos de acesso (setters)
     set login(novoLogin) {
        this._login = novoLogin;
    }

    set senha(novaSenha) {
        this._senha = novaSenha;
    }

    // Métodos públicos
    toString() {
        return `Admin [Login: ${this._login}, Senha: ${this._senha}]`;
    }
}