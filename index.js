import { Cliente } from "./Cliente.js"
import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

//Conta CORRENTE
const contaCorrenteRicardo = new ContaCorrente(cliente1.nome + ' Corrente', 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

//Conta SALARIO
const contaSalario = new ContaSalario(cliente1.nome + ' Salario', 1001);
contaSalario.depositar(100);
contaSalario.sacar(10);
console.log(contaSalario.getContaInfo())

//Conta POUPANÇA
const contaPoupanca = new ContaPoupanca(50, cliente1.nome + ' Poupança', 1001)

// const conta = new Conta(cliente1, 1001); // Validação de que não pode criar uma Conta Diretamente
