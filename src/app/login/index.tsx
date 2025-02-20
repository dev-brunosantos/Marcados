import { BtnComponent } from "@/src/components/Btn";
import { InputComponent } from "@/src/components/Input";
import { useLogin } from "@/src/hooks/useLogin";
import { useState } from "react";

export default function Login() {

    const funcLogin = useLogin();

    const [email, setemail] = useState('')
    const [senha, setSenha] = useState('')

    function realizarLogin() {
        funcLogin?.login(email, senha)
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
                    isPassword={false}
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
                    funcLogin?.erro && (
                        <>
                            <p>Não tem conta?</p>
                            <a href="">Clique aqui e cadastre-se</a>
                        </>
                    )
                }
            </div>
        </div>
    )
}