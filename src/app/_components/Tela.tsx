import { ReactProps } from "@/src/interface/IReactProps";

export function Tela({ children }: ReactProps) {
    return (
        <div className="w-full h-[100vh] bg-red-400 flex flex-col items-center justify-evenly">
            {children}
        </div>
    )
}

export function Container({ children }: ReactProps) {
    return (
        <div className="w-[100%] h-auto p-5 flex flex-col items-center justify-evenly">
            {children}
        </div>
    )
}