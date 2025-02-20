import { ButtonHTMLAttributes } from "react"

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    titulo: string;
}

export const BtnComponent = ({ titulo }: BtnProps) => {
    return (
        <button>
            {titulo}
        </button>
    )
}
