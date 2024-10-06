import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    
    static numeroDeContas = 0;

    constructor(cliente, agencia){
        super(0, cliente, agencia); // O "Super" serve para chamar funções/defirnir variaveis do Pai. 
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor) {
        let taxa = 1.1;
        return super._sacar(valor, taxa); // Poderia ser "this._sacar" por conta que ContaCorrente Extende o Conta. A intaxe "super." me parece mais intuitiva
    }
}
