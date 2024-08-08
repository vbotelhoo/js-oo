import User from './User-exercicio.js';

class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = 'true'){
        super(nome, email, nascimento, role, ativo);
    };

    criarCurso(nomeCurso, qtdVagas){
        return`Curso ${nomeCurso} foi criado com sucesso e possui ${qtdVagas} vagas.`;
    };
    excluirCurso(nomeCurso){
        return`Curso ${nomeCurso} excluído com sucesso`;
    };
    desativarPerfil(){
        return`Pefil do user ${this.nome} foi desativado.`
    };
};

// const novoAdmin = new Admin('Vlad', 'vl@vl.com', '2024-01-01');
// console.log(novoAdmin);
// console.log(novoAdmin.criarPerfil());
// console.log(novoAdmin.criarCurso('JavaScript', '20'));
// console.log(novoAdmin.excluirCurso('Java'));
// console.log(novoAdmin.desativarPerfil());