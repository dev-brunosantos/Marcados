import { ButtonHTMLAttributes } from "react"

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    titulo: string;
}

export const BtnComponent = ({ titulo, ...rest }: BtnProps) => {
    return (
        <button 
            {...rest}
            className="
              w-[90%] h-11 border rounded-md relative flex items-center justify-center overflow-hidden
            "
        >
            {titulo}
        </button>
    )
}
