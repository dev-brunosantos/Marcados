import { ButtonHTMLAttributes } from 'react'

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    titulo: string;
}

export const BtnComponent = ({ titulo, ...rest }:BtnProps) => {
    return(
        <div>
            <button
                {...rest}
            >
                { titulo }
            </button>
        </div>
    )
}