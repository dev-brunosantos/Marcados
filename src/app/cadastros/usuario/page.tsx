import { BtnComponent } from "@/src/components/Btn";
import { Container } from "@/src/components/Container";
import { InputComponent } from "@/src/components/Input";
import { Tela } from "@/src/components/Tela";

export default function NovoUsuario() {
    return(
        <Tela>
            <Container>
                <InputComponent 
                    isPassword={false}
                    placeholder="Digite seu nome"
                    />    
                
                <InputComponent 
                    isPassword={false}
                    placeholder="Digite seu sobrenome"
                    />    

                <InputComponent 
                    isPassword={false}
                    placeholder="Digite seu email"
                />    
                
                <InputComponent 
                    isPassword={false}
                    placeholder="Digite sua senha"
                    />    
                
                <InputComponent 
                    isPassword={false}
                    placeholder="Confirme sua senha"
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