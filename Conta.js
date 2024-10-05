export class Conta{
    #saldo;
    #cliente;
    #agencia;
    
    constructor(saldoInicial, cliente, agencia) {
        this.#saldo = saldoInicial; 
        this.#cliente = cliente;
        this.#agencia = agencia;
    }

    get saldo(){
        return this.#saldo;
    }

    get cliente(){
        return this.#cliente;
    }

    get agencia(){
        return this.#agencia;
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