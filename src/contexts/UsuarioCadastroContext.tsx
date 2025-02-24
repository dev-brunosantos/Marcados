"use client"

import { createContext, useState } from "react";
import { doc, addDoc, collection } from 'firebase/firestore';
import { ReactProps } from "../interfaces/IReactProps";
import { Usuario } from "../interfaces/Usuario";
import { db } from "../config/firebase";

interface UsuarioCadastroProps {
    usuario: Usuario;
    cadastrar: (
        id: number, nome: string, sobrenome: string, 
        email: string, senha: string, categoria: string
    ) => void;
    confirmarSenha: string;
}

const UsuarioCadastroContext = createContext<UsuarioCadastroProps | undefined>(undefined)

const UsuarioCadastroProvider = ({ children }: ReactProps) => {

    const [usuario, setUsuario] = useState<Usuario>({
        id: 0, nome: '', sobrenome: '',
        email: '', senha: '', cargo: '',
        naipe: ''
    })

    const [confirmarSenha, setConfirmarSenha] = useState('')

    async function cadastrar(
        id: number, nome: string, sobrenome: string, email: string,
        senha: string, categoria: string
    ) {
        if (nome.trim() === "" || email.trim() === "" || senha.trim() == "") {
            return alert("Todos os campos devem ser preenchidos")
        }

        // if(confirmarSenha !== senha) {
        //     return alert("As senhas não são iguais")
        // }

        return (

            id = Math.floor(Math.random() * 100000) + 1,

            setUsuario({
                id, nome, sobrenome, 
                email, senha, cargo: '',
                naipe: ''
            }),

            await addDoc(collection(db, categoria), {
                id: id,
                nome: nome,
                sobrenome: sobrenome,
                email: email,
                senha: senha
            }),

            alert("Usuário cadastrado com sucesso.")
        )
    }

    return (
        <UsuarioCadastroContext.Provider value={{ usuario, confirmarSenha, cadastrar }}>
            {children}
        </UsuarioCadastroContext.Provider>
    )
}

export { UsuarioCadastroContext, UsuarioCadastroProvider }