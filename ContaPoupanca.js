export class ContaPoupanca {
    #saldo; // ES2022, foi criado uma maneira de deixar uma propriedade REALMENTE PRIVADA.  
    #cliente; // ES2022, foi criado uma maneira de deixar uma propriedade REALMENTE PRIVADA.  
    #agencia; // ||
    
    constructor(saldoInicial, cliente, agencia) {
        //this._saldoInicial = saldoInicial; // Definição popular para dizer que é uma propriedade PRIVADA, mas na pratica não é.

        this.#saldo = saldoInicial; // PROPRIEDADE PRIVADA 
        this.#cliente = cliente; // PROPRIEDADE PRIVADA
        this.#agencia = agencia; // PROPRIEDADE PRIVADA
    }

    get saldo() {
        return this.#saldo;
    }

    get cliente() {
        return this.#cliente;
    }

    get agencia() {
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