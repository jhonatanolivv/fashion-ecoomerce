import { Button } from "../button/button";
import { FormInput } from "../form-input/form-input";



export function SingUp() {
    return (
        <div>
            <h2>Não possui conta?</h2>
            <form action="">
                <FormInput
                label="Nome"
                type="text"
                requiried
                name="nome"
                placeholder="Digite seu nome"
                autocomplete="off"
                />
                <FormInput
                label="E-mail"
                type="email"
                requiried
                name="email"
                placeholder="Digite seu e-mail"
                autocomplete="off"
                />
                <FormInput
                label="Senha"
                type="password"
                requiried
                name="senha"
                placeholder="Digite seu senha"
                />
                <FormInput
                label="Confirme sua senha"
                type="password"
                requiried
                name="confirmeSenha"
                placeholder="Digite sua senha novamente"
                />
            </form>
            <Button type="submit">
                Criar conta
            </Button>
        </div>
    )
}