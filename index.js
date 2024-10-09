import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const gerente = new Gerente('Rodrigo', 10000, 87954621321);
const diretor = new Diretor('Marcos', 5000, 45654621332)
diretor.cadastrarSenha(123123123);

const estaLogado =  SistemaAutenticacao.login(diretor, "123123123");

console.log(estaLogado)
// console.log(gerente.getAllData())
// console.log(diretor.getAllData())