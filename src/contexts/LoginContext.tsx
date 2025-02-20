"use client"

import { createContext, ReactNode, useState } from "react";
import { useRouter } from 'next/navigation'

interface ReactProps {
    children: ReactNode;
}

interface UsuarioLogin { 
    email: string;
    senha: string;
}

interface LoginProps {
    usuario: UsuarioLogin;
    login: (email: string, senha: string) => void; 
    erro: boolean;
}

const LoginContext = createContext<LoginProps | null>(null)

const LoginProvider = ({ children }:ReactProps) => {

    const router = useRouter()

    const [usuario, setUsuario] = useState<UsuarioLogin>({ email: '', senha: ''})
    const [erro, setErro] = useState(false)

    function login(email: string, senha: string) {
        if(email.trim() === "" || senha.trim() === "") {
            setErro(true)
            console.log("Todos os campos devem ser preenchidos para a realização do Login.")
        }

        setErro(false)
        setUsuario({ email, senha })

        return router.push('/cadastro-usuario')
    }

    return(
        <LoginContext.Provider value={{ login, erro, usuario }}>
            {children}
        </LoginContext.Provider>
    )
}

export { LoginContext, LoginProvider }