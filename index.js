import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

const novoUser = new User ('Vitor', 'v@v.com', '2024-01-01');
console.log(novoUser.exibirInfos());

const infoGenerica = User.exibirInfosGenericas('Roberto', 'r@r.com');
console.log(infoGenerica);

// const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2024-01-02');
// console.log(novoAdmin.exibirInfos());

// const novoDocente = new Docente('Ana', 'a@a.com', '2024-01-03');
// console.log(novoDocente.exibirInfos());