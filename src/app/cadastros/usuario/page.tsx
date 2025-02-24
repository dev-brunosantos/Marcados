"use client"

import { BtnComponent } from "@/src/components/Btn";
import { Container } from "@/src/components/Container";
import { InputComponent } from "@/src/components/Input";
import { Tela } from "@/src/components/Tela";
import { Usuario } from "@/src/interfaces/Usuario";
import { useState } from "react";

export default function NovoUsuario() {

    const [usuario, setUsuario] = useState<Usuario>({
        id: 0, nome: '', sobrenome: '',
        email: '', senha: '', cargo: '',
        naipe: ''
    })

    const [confirmaSenha, setConfirmaSenha] = useState('')

    return (
        <Tela>
            <Container>
                <InputComponent
                    isPassword={false}
                    placeholder="Digite seu nome"
                    onChange={e => setUsuario(user => ({ ...user, nome: e.target.value }))}
                />

                <InputComponent
                    isPassword={false}
                    placeholder="Digite seu sobrenome"
                    onChange={e => setUsuario(user => ({ ...user, sobrenome: e.target.value }))}
                />

                <InputComponent
                    isPassword={false}
                    placeholder="Digite seu email"
                    onChange={e => setUsuario(user => ({ ...user, email: e.target.value }))}
                />

                <InputComponent
                    isPassword={false}
                    placeholder="Digite sua senha"
                    onChange={e => setConfirmaSenha(e.target.value)}
                />

                <InputComponent
                    isPassword={false}
                    placeholder="Confirme sua senha"
                    onChange={e => setUsuario(user => ({ ...user, nome: e.target.value }))}
                />
            </Container>

            <Container>
                <BtnComponent
                    titulo="Cadastrar"
                />
            </Container>
        </Tela>
    )
}