const users = {
    nome: 'Vitor',
    email: 'vitor@gmail.com',
    nascimente: '2000-01-01',
    role: 'estudante',
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email);
    }
}

users.exibirInfos();