export interface UsuarioLogin { 
    email: string;
    senha: string;
}

export interface LoginProps {
    usuario: UsuarioLogin;
    login: (email: string, senha: string) => void; 
    erro: boolean;
}