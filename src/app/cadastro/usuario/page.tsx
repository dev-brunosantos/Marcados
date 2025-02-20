"use client"

import { useState } from "react";
import { BtnComponent } from "@/src/components/Btn";
import { InputComponent } from "@/src/components/Input";
import { useCadastroUsuario } from "@/src/hooks/useCadastroUsuario";

export default function NovoUsuario() {

    const { usuario, cadastroUsuario, erro } = useCadastroUsuario()

    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')
    
    function cadastrarUsuario() {
        cadastroUsuario(nome,  email, senha, confirmarSenha)
        // alert("Funcionou")
    }

    return (
        <div>

            <div>
                <InputComponent
                    isPassword={false}
                    placeholder="Digite seu nome"
                    onChange={e => setNome(e.target.value)}
                />
                <InputComponent
                    isPassword={false}
                    placeholder="Digite seu sobrenome"
                    onChange={e => setSobrenome(e.target.value)}
                />
                <InputComponent
                    isPassword={false}
                    placeholder="Digite seu e-mail"
                    onChange={e => setEmail(e.target.value)}
                />
                <InputComponent
                    isPassword={true}
                    placeholder="Digite sua senha"
                    onChange={e => setSenha(e.target.value)}
                />
                <InputComponent
                    isPassword={true}
                    placeholder="Confirme sua senha"
                    onChange={e => setConfirmarSenha(e.target.value)}
                />
            </div>

            <div>
                <BtnComponent
                    titulo="Cadastrar"
                    onClick={cadastrarUsuario}
                />
            </div>
        </div>
    )
}