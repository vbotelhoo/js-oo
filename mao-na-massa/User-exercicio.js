export default class User {
    constructor(nome, email, nascimento, role, ativo= 'true'){
        this.nome = nome;
        this.email = email;
        this.nascimento = nascimento;
        this.role = role || 'estudante';
        this.ativo = ativo;
    };

    criarPerfil(){
        return`Estudante ${this.nome} criado com sucesso`;
    };
    apagarPerfil(){
        return`Estudante ${this.nome} deletado com sucesso`;
    };
    exibirInfo(){
        return`${this.nome}, ${this.email}, ${this.nascimento}`;
    };
    exibirListaCursos(cursosLista){
        return`${cursosLista}`;
    };
    matricularEmCursos(curso){
        return`Matricula realizada no cruso ${curso}`;
    };
    exibirCursosMatriculados(cursosMatriculadosLista){
        return`Cursos matriculados: ${cursosMatriculadosLista}`;
    };

};

// const novoUser = new User('Vitor', 'v@v.com', '2024-01-01');

// console.log(novoUser);
// console.log(novoUser.criarPerfil());
// console.log(novoUser.apagarPerfil());
// console.log(novoUser.exibirInfo());
// console.log(novoUser.exibirListaCursos(['Js', 'Java', 'Python']));
// console.log(novoUser.matricularEmCursos('Js'));
// console.log(novoUser.exibirCursosMatriculados(['Js', 'Python']));