export interface Usuario {
    id: number;
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
    cargo: string;
    naipe: string;
}

export interface UsuarioFirebase extends Pick<Usuario, 'nome' | 'sobrenome' | 'email' | 'cargo' | 'naipe'> {}

export interface UsuarioLogin extends Pick<Usuario, 'email' | 'senha'> {}