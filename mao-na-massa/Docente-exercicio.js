import User from "./User-exercicio.js";

class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = 'true'){
        super(nome, email, nascimento, role, ativo);
    }

    aprovarEstudante(estudante, curso){
        return`O Aluno(a) ${estudante} foi aprovado no curso ${curso}. Avaliador: ${this.nome}.`;
    };
    reprovarEstudante(estudante, curso){
        return`O Aluno(a) ${estudante} foi reprovado no curso ${curso}. Avaliador: ${this.nome}.`;
    };
}

// const novoDocente = new Docente('Vic', 'vic@vic.com', '2024-01-01');
// console.log(novoDocente);
// console.log(novoDocente.aprovarEstudante('João', 'Matematica')),
// console.log(novoDocente.reprovarEstudante('Thiago', 'Biologia'));