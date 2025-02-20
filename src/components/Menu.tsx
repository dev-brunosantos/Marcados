"use client"

import Link from "next/link"
import { useRouter } from 'next/navigation';
import { Undo2 } from 'lucide-react';

export const MenuPrincipal = () => {

    const router = useRouter();

    return(
        <header>
            <div>
                <a href="">Logo</a>
            </div>

            <nav>
                <ul>
                    <Link href=''>Home</Link>
                    <Link href=''>Escalas</Link>
                    <Link href=''>Louvores</Link>
                </ul>

                <button onClick={() => router.push('/login')}>
                    Sair 
                    <span>
                        <Undo2 />
                    </span>
                </button>
            </nav>
        </header>
    )
}