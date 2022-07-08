import Tema from './Tema'
import Usuario from './Usuario'

interface Postagem {
    id: number;
    tema?: Tema | null
    texto: string;
    titulo: string;
}

export default Postagem;