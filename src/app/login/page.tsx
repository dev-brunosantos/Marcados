"use client"

import { useState } from "react";
import { BtnComponent } from "@/src/components/Btn";
import { InputComponent } from "@/src/components/Input";
import { useLogin } from "@/src/hooks/useLogin";

export default function Login() {

    const { login, erro } = useLogin();

    const [email, setemail] = useState('')
    const [senha, setSenha] = useState('')

    function realizarLogin() {
        login(email, senha)
    }

    return (
        <div>

            <div>
                <InputComponent
                    isPassword={false}
                    placeholder="Digite seu e-mail"
                    onChange={e => setemail(e.target.value)}
                />
                <InputComponent
                    isPassword={true}
                    placeholder="Digite sua senha"
                    onChange={e => setSenha(e.target.value)}
                />
            </div>

            <div>
                <BtnComponent
                    titulo="Entrar"
                    onClick={realizarLogin}
                />
            </div>

            <div>
                {
                    erro && (
                        <>
                            <p>Não tem conta?</p>
                            <a href="/cadastro/usuario">Clique aqui e cadastre-se</a>
                        </>
                    )
                }
            </div>
        </div>
    )
}