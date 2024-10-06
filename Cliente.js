export class Cliente{
    #cpf

    constructor(nome, cpf){
        this.nome = nome; // "Nome" não precisa de um Getter por que ele não é privado 
        this.#cpf = cpf;
    }

    get cpf(){
        return this.#cpf;
    }
}