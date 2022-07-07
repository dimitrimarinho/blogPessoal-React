import Postagem from './Postagem'

interface Usuario {
    id: number;
    nome: string;
    postagem?: Postagem | null;
    senha: string
    usuario: string;
}

export default Usuario;