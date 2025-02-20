import { useContext, ContextType } from "react"
import { LoginContext } from "../contexts/LoginContext"

interface UseLogin {
    (): ContextType<typeof LoginContext>;
}

export const useLogin = () => {
    const contexto = useContext(LoginContext)
    if(!contexto) {
        throw new Error("Não existe nenhum contexto de LOGIN no sistema.")
    }
    return contexto
}