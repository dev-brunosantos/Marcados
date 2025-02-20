import Link from "next/link"
import { Undo2 } from 'lucide-react';

export const MenuPrincipal = () => {
    return(
        <header>
            <div>
                <a href="">Logomarca</a>
            </div>

            <nav>
                <ul>
                    <Link href=''>Home</Link>
                    <Link href=''>Escalas</Link>
                    <Link href=''>Louvores</Link>
                </ul>

                <button>
                    Sair 
                    <span>
                        <Undo2 />
                    </span>
                </button>
            </nav>
        </header>
    )
}