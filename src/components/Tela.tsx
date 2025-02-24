import { ReactProps } from "../interfaces/IReactProps";

export const Tela = ({ children }:ReactProps) => {
    return(
        <div className="
            w-full h-full flex flex-col items-center justify-evenly
        ">
            { children }
        </div>
    )
}