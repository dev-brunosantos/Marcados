import { useContext } from "react"
import { UsuarioCadastroContext } from "../contexts/UsuarioCadastroContext"

export const useCadastroUsuario = () => {
    const contexto = useContext(UsuarioCadastroContext)
    if(!contexto) 
        throw new Error("Não existe nenhum contexto responsável pelo cadastro de novos usuários.")
    return contexto
}