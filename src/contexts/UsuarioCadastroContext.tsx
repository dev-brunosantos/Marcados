"use client"

import { createContext, useState } from "react";
import { useRouter } from 'next/navigation'
import { ReactProps } from "../interface/IReactProps";

interface Usuario {
    nome: string;
    sobrenome?: string;
    email: string;
    senha: string;
}

interface UsuarioCadastro {
    usuario: Usuario;
    cadastroUsuario: (
        nome: string, email: string, senha:
            string, confirmarSenha: string, sobrenome?: string
    ) => void;
    erro: boolean;
}


const UsuarioCadastroContext = createContext<UsuarioCadastro | undefined>(undefined)

const UsuarioCadastroProvider = ({ children }: ReactProps) => {

    const router = useRouter()

    const [usuario, setUsuario] = useState<Usuario>({
        nome: '', sobrenome: '',
        email: '', senha: ''
    })

    const [erro, setErro] = useState(false)

    function cadastroUsuario(nome: string, email: string, senha: string, confirmarSenha: string, sobrenome?: string) {
        if (nome.trim() === "" || email.trim() === "" || senha.trim() === "") {
            setErro(true)
            return alert("Todos os campos devem ser preenchidos para a realização do Login.")
        }

        if (confirmarSenha !== senha) {
            setErro(true)
            return alert("As senhas não são iguais, por favor verifque.")
        }

        setErro(false)
        
        return(
            alert("Usuário cadastrado com sucesso"),
            router.push('/login')
        )
    }

    return (
        <UsuarioCadastroContext.Provider value={{ usuario, cadastroUsuario, erro }}>
            {children}
        </UsuarioCadastroContext.Provider>
    )
}

export { UsuarioCadastroContext, UsuarioCadastroProvider }