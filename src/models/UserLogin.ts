interface UserLogin {
    id: number;
    nome: string;
    senha: string;
    token?: string | null
    usuario: string;
}

export default UserLogin;