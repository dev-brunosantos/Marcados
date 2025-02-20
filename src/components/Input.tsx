import { InputHTMLAttributes, useState } from "react";
import { Eye, EyeClosed, EyeOff } from 'lucide-react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    isPassword: boolean;
}

export const InputComponent = ({ isPassword, ...rest }: InputProps) => {

    const [tipo, setTipo] = useState('password')

    function verSenha() {
        tipo === "password" ?
            setTipo("text") :
            setTipo("password")
    }

    if (isPassword) {
        return (
            <div className="
              w-[90%] h-11 border rounded-md relative flex items-center justify-center overflow-hidden my-3
            ">
                <input
                    type={tipo}
                    {...rest}
                    className="
                      w-full h-full pl-5 bg-transparent outline-none
                    "
                />

                <button
                    onClick={verSenha}
                    className="h-full absolute right-2 z-10"
                >
                    {tipo === "password" ? <EyeClosed /> : <Eye />}
                </button>
            </div>
        )
    }

    return (
        <div className="
          w-[90%] h-11 border rounded-md relative flex items-center justify-center overflow-hidden my-3
        ">
            <input
                type="text"
                {...rest}
                className="
                  w-full h-full pl-5 bg-transparent outline-none
                "
            />
        </div>
    )
}