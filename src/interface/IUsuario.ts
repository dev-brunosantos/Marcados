export interface Usuario {
    nome: string;
    sobrenome?: string;
    email: string;
    senha: string;
    cargo: Cargo;
    funcao: Funcao;
    naipe: Naipe;
}

interface Funcao {
    id: number;
    funcao: string;
}

interface Cargo {
    id: number;
    cargo: string;
}

interface Naipe {
    id: number;
    naipe: string;
}