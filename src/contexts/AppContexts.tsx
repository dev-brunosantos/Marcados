import { ReactNode } from "react"
import { LoginProvider } from "./LoginContext"
import { UsuarioCadastroProvider } from "./UsuarioCadastroContext"

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
    return (
        <LoginProvider>
            <UsuarioCadastroProvider>
                {children}
            </UsuarioCadastroProvider>
        </LoginProvider>
    )
}
