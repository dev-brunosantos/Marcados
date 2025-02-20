import { createContext } from "react";

interface Usuario {
    nome: string;
    sobrenome?: string;
    email: string;
    senha: string;
}

interface UsuarioCadastro {
    usuario: Usuario;
    cadastro: (nome: string, email: string, senha: string, sobrenome?:string) => void;
    erro: boolean;
}


const UsuarioCadastroContext = createContext<undefined>(undefined)