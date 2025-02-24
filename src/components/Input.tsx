import { InputHTMLAttributes, useState } from 'react'
import { Eye, EyeClosed } from 'lucide-react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    isPassword: boolean;
}

export const InputComponent = ({ isPassword, ...rest }: InputProps) => {

    const [tipo, setTipo] = useState("password")

    function verSenha() {
        tipo === "password" ? setTipo("text") : setTipo("password")
    }

    if (!isPassword) {
        return (
            <div>
                <input
                    type="text"
                    {...rest}
                />
            </div>
        )
    }

    return (
        <div>
            <input
                type={tipo}
                {...rest}
            />

            <button
                onClick={verSenha}
            >
                {tipo === "password" ?
                    <EyeClosed /> :
                    <Eye />
                }
            </button>
        </div>
    )
}