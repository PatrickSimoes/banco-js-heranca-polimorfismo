export class Cliente{
    #cpf
    #senha

    constructor(nome, cpf, senha){
        this.nome = nome; // "Nome" não precisa de um Getter por que ele não é privado 
        this.#cpf = cpf;
        this.#senha = senha;
    }

    get cpf(){
        return this.#cpf;
    }

    autenticar() {
        return true;
    }
}