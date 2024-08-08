export default class User {
    #nome;
    #email;
    #nascimento;
    #role;
    #ativo;
    constructor(nome, email, nascimento, role, ativo = true){
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || "estudante";
        this.#ativo = ativo;
    };
    
    get nome(){
        return this.#nome;
    };

    set nome(novoNome){
        if(novoNome === ""){
            throw new Error('formato do nome nao é valido')
        }
        this.#nome = novoNome;
    };

    get email(){
        return this.#email;
    };
    get nascimento(){
        return this.#nascimento;
    };
    get role(){
        return this.#role;
    };
    get ativo(){
        return this.#ativo;
    };

    // exibirInfos() {
    //     return `${this.nome}, ${this.email}`;
    // };

    exibirInfos(){
        if(this.role === 'estudante'){
            return `dados estudantes: ${this.nome}`;
        };
        if(this.role === 'admin'){
            return `dados admin: ${this.nome}`;
        };
        if(this.role === 'docente'){
            return `dados docente: ${this.nome}`;
        };
    }
    
    static exibirInfosGenericas(nome, email){
        return `${nome}, ${email}`;
    }
}