import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
import { Cliente } from "./Cliente.js";

const diretor = new Diretor('Marcos', 5000, 45654621332)
diretor.cadastrarSenha(999878);
const gerente = new Gerente('Rodrigo', 10000, 87954621321);
gerente.cadastrarSenha(123123123);

const diretorEstaLogado =  SistemaAutenticacao.login(diretor, "999878");
const gerenteEstaLogado =  SistemaAutenticacao.login(gerente, "123123123");

console.log(gerenteEstaLogado, diretorEstaLogado)
console.log(gerente.getAllData())
console.log(diretor.getAllData())

const cliente = new Cliente('Marcela', 54654687987, 12345678);
const clienteEstaLogado =  SistemaAutenticacao.login(cliente, "12345678");
console.log(clienteEstaLogado)