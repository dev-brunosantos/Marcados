"use client"

import { useState } from "react";
import { BtnComponent } from "@/src/components/Btn";
import { InputComponent } from "@/src/components/Input";
import { useCadastroUsuario } from "@/src/hooks/useCadastroUsuario";
import { Container, Tela } from "../../_components/Tela";

export default function NovoUsuario() {

    const { usuario, cadastroUsuario, erro } = useCadastroUsuario()

    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')
    
    function cadastrarUsuario() {
        cadastroUsuario(nome,  email, senha, confirmarSenha)
        
        // console.log(nome)

        // let nomeCompleto = nome.split(" ")
        // let primeiroNome = nomeCompleto[0] 
        // let segundoNome  = nomeCompleto[1]

        // console.log(primeiroNome)
        // console.log(segundoNome)
        // console.log(`${primeiroNome} ${segundoNome}`)
    }

    return (
        <Tela>
            <Container>
                <h1 className="text-5xl">Novo usuário</h1>
            </Container>

            <Container>
                <InputComponent
                    isPassword={false}
                    placeholder="Digite seu nome"
                    onChange={e => setNome(e.target.value)}
                />
                {/* <InputComponent
                    isPassword={false}
                    placeholder="Digite seu sobrenome"
                    onChange={e => setSobrenome(e.target.value)}
                /> */}
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
            </Container>

            <Container>
                <BtnComponent
                    titulo="Cadastrar"
                    onClick={cadastrarUsuario}
                />
            </Container>
        </Tela>
    )
}