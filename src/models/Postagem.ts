import Tema from './Tema'
import Usuario from './Usuario'

interface Postagem {
    id: number;
    date: string;
    tema?: Tema | null
    texto: string;
    titulo: string;
    usuario?: Usuario | null
}

export default Postagem;