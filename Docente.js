import User from "./User.js";

class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = 'true'){
        super(nome, email, nascimento, role, ativo);
    };

    aprovarEstudante(estudante, curso){
        return `Estudante ${estudante} passou no curso ${curso}, responsável ${this.nome}.`;
    };
}

const novoDocente = new Docente('Ana', 'a@a.com', '2024-01-01');
console.log(novoDocente.aprovarEstudante('Juliana', 'JS'));