// Classe abstrata - Só pode ser herdada, e não instanciada.
export class Conta{
    #saldo;
    #cliente;
    #agencia;
    
    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor == Conta) {
            throw new Error("Você não deveria instanciar um objeto do tipo Conta Diretamente")
        }

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

    getContaInfo() {
        return {
            saldo: this.#saldo,
            cliente: this.#cliente,
            agencia: this.#agencia
        };
    }

    sacar(){
        // Pensa num banco ruim, todo saque tem uma taxa kkkk.
        throw new Error("O metodo sacar é abstrato")
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;

        if(this.#saldo >= valorSacado){
            this.#saldo -= valorSacado;

            return valorSacado;
        }

        throw new Error("Saldo insuficiente");
    }

    depositar(valor){
        if(valor <= 0)
        {
            return;
        } 
        this.#saldo += valor;           
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        if (valorSacado > 0) {

            conta.depositar(valorSacado);
        } else {
            console.log("Transferência falhou. Saldo insuficiente.");
        }
    }
}