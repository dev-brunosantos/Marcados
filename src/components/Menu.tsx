"use client"

import Link from "next/link"
import { Menu } from 'lucide-react';
import { useState } from "react";

export const MenuPrincipal = () => {
    const [classeMenu, setClasseMenu] = useState('fechar-menu');

    function mostrarMenu() {
        classeMenu === 'fechar-menu' ? setClasseMenu('abrir-menu') : setClasseMenu('fechar-menu')
    }

    return (
        <header className="
          w-full h-14 border px-4 flex items-center justify-between fixed top-0 left-0 
        ">
            <div>
                <a href="">Marcados</a>
            </div>

            <nav>
                <div className="h-full md:hidden">
                    <button className="h-full flex items-center justify-center" onClick={mostrarMenu}>
                        <Menu />
                    </button>
                </div>

                <ul
                    className={`
                      ${classeMenu} px-4 flex flex-col justify-items-end justify-evenly absolute right-1 top-[100%]
                    `}
                >
                    <Link href=''>Home</Link>
                    <Link href=''>Escalas</Link>
                    <Link href=''>Louvores</Link>
                    <Link href='/login'>Sair</Link>
                </ul>
            </nav>
        </header>
    )
}