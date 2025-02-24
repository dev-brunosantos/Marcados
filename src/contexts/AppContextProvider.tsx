import { ReactProps } from "../interfaces/IReactProps"
import { UsuarioCadastroProvider } from "./UsuarioCadastroContext"

export const AppContextProvider = ({ children }: ReactProps) => {
    return (
        <UsuarioCadastroProvider>
            {children}
        </UsuarioCadastroProvider>
    )
}