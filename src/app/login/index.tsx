import { BtnComponent } from "@/src/components/Btn";
import { InputComponent } from "@/src/components/Input";

export default function Login() {
    return (
        <div>

            <div>
                <InputComponent
                    isPassword={false}
                    placeholder="Digite seu e-mail"
                />
                <InputComponent
                    isPassword={false}
                    placeholder="Digite sua senha"
                />
            </div>

            <div>
                <BtnComponent 
                    titulo="Entrar"
                />
            </div>

            <div>
                
            </div>
        </div>
    )
}