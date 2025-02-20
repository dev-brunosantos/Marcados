"use client"

import { createContext, ReactNode, useState } from "react";
import { useRouter } from 'next/navigation'
import { ReactProps } from "../interface/IReactProps";
import { LoginProps, UsuarioLogin } from "../interface/ILogin";

const LoginContext = createContext<LoginProps | undefined>(undefined)

const LoginProvider = ({ children }:ReactProps) => {

    const router = useRouter()

    const [usuario, setUsuario] = useState<UsuarioLogin>({ email: '', senha: ''})
    const [erro, setErro] = useState(false)

    function login(email: string, senha: string) {
        if(email.trim() === "" || senha.trim() === "") {
            setErro(true)
            alert("Todos os campos devem ser preenchidos para a realização do Login.")
            return router.refresh()
        }

        setErro(false)
        setUsuario({ email, senha })

        return router.push('/home')
    }

    return(
        <LoginContext.Provider value={{ login, erro, usuario }}>
            {children}
        </LoginContext.Provider>
    )
}

export { LoginContext, LoginProvider }