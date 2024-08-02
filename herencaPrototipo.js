const users = {
    nome: 'Vitor',
    email: 'vitor@gmail.com',
    nascimente: '2000-01-01',
    role: 'estudante',
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email);
    }
};

const admin = {
    nome: 'Vic',
    email: 'vic@gmail.com',
    nascimente: '2000-01-01',
    role: 'admin',
    ativo: true,
    criarCurso: function() {
        console.log('Curso Criado');
    }
};

Object.setPrototypeOf(admin, users);
admin.criarCurso();
admin.exibirInfos();
