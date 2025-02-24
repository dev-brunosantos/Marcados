import { ReactProps } from "../interfaces/IReactProps"

export const Container = ({ children }:ReactProps) => {
    return(
        <div className="
            w-full h-auto p-5 flex flex-col items-center justify-evenly
        ">
            { children }
        </div>
    )
}