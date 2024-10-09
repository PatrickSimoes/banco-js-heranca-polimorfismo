/*
 * Duck Type.
 * Polimorfismo, poder usar uma classe para N tipos de classe.
 * Js fracamente tipada.
 * O que importa a classe ter o metodo autenticar.
 * Emcapsulamento, ter acessosres e metodos para manipular os dados das classes.
 */
export class SistemaAutenticacao{
    static login(autenticavel, senha) {
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha)
        }
        return false;
    }

    static ehAutenticavel(autenticavel) {
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
    }
}