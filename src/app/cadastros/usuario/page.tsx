"use client"

import { BtnComponent } from "@/src/components/Btn";
import { Container } from "@/src/components/Container";
import { InputComponent } from "@/src/components/Input";
import { Tela } from "@/src/components/Tela";
import { useCadastroUsuario } from "@/src/hooks/useCadastroUsuario";
import { Usuario } from "@/src/interfaces/Usuario";
import { useState } from "react";

export default function NovoUsuario() {

    const { cadastrar } = useCadastroUsuario()

   const [nome, setNome] = useState('')
   const [sobrenome, setSobrenome] = useState('')
   const [email, setEmail] = useState('')
   const [senha, setSenha] = useState('')

    const [confirmaSenha, setConfirmaSenha] = useState('')

    const teste = 'Vozes'

    function cadastrarNovoUsuario() {
        cadastrar(12651, nome, sobrenome, email, senha, teste)
    }

    return (
        <Tela>
            <Container>
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
                    placeholder="Digite seu email"
                    onChange={e => setEmail(e.target.value)}
                />

                <InputComponent
                    isPassword={false}
                    placeholder="Digite sua senha"
                    onChange={e => setSenha(e.target.value)}
                />

                {/* <InputComponent
                    isPassword={false}
                    placeholder="Confirme sua senha"
                    onChange={e => setUsuario(user => ({ ...user, nome: e.target.value }))}
                /> */}
            </Container>

            <Container>
                <BtnComponent
                    titulo="Cadastrar"
                    onClick={cadastrarNovoUsuario}
                />
            </Container>
        </Tela>
    )
}