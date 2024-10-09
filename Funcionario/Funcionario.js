export class Funcionario {
    #nome;
    #salario;
    #cpf;
    #bonificacao;
    #senha;

    constructor(nome, salario, cpf) {
        this.#nome = nome;    
        this.#salario = salario;    
        this.#cpf = cpf;

        this.#bonificacao = 1;
        this.#senha;
    }

    get nome() {
        return this.#nome;
    }

    get salario() {
        return this.#salario;
    }

    get cpf() {
        return this.#cpf;
    }

    get bonificacao() {
        return this.#bonificacao;
    }

    get senha() {
        return this.#senha;
    }

    set senha(data) {
        if(data != this.#senha) {
            this.#senha = data;
        }
    }

    set bonificacao(data) {
        if(data != this.#bonificacao) {
            this.#bonificacao = data;
        }
    }

    getAllData() {
        return {
            nome: this.#nome,
            salario: this.#salario,
            cpf: this.#cpf,
            bonificacao: this.#bonificacao      
        }
    }

    autenticar(senha) {
        return senha == this.#senha;
    }

    cadastrarSenha(senha) {
        this.#senha = senha
    }
}