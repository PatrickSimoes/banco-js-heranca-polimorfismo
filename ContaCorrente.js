import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0;
    #agencia;
    #cliente;
    #saldo = 0;
    
    constructor(agencia, cliente){
        this.#agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = cliente; 
        ContaCorrente.numeroDeContas += 1;
    }

    get cliente(){
        return this.#cliente;
    }

    get saldo(){
        return this.#saldo;
    }
    
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this.#cliente = novoValor;
        }
    }


    sacar(valor){
        if(this.#saldo >= valor){
            this.#saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0)
        {
            return;
        } 
        this.#saldo += valor;           
    }

    tranferir(valor, conta){
        
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }
}
